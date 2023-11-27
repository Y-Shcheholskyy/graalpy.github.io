---
layout: examples
toc_group: examples
link_title: Standalone SQLite REST Server Example
title: Standalone SQLite REST Server Example
permalink: /examples/standalone_sqlite_rest_server/
description: This example provides a demonstration of creating a standalone web server to provide a minimal REST interface to a SQLite database, using the Python `http.server` and sqlite modules, and GraalVM Native Image.
---

# Standalone SQLite REST Server Example

{{ page.description }}

The database models musical genres.

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Copy the following contents into a file named _sqlite_rest.py_:

    ```python
    import sqlite3
    from sqlite3 import Error
    from http.server import BaseHTTPRequestHandler, HTTPServer
    import cgi
    import json
    
    DB_NAME = 'graalpy_sqlite.db'
    HOST_NAME = "localhost"
    HOST_PORT = 8080
    
    
    class MyServer(BaseHTTPRequestHandler):
    
        def do_GET(self):
            if self.path.endswith("/list"):
                self.send_response(200)
                self.send_header('content_type', 'application/json')
                self.end_headers()
                connection = create_connection(DB_NAME)
                cursor = connection.cursor()
                result = cursor.execute("SELECT * FROM genres")
                rows = result.fetchall()
                connection.close()
                for row in rows:
                    genre = {"id": row[0], "name": row[1]}
                    self.wfile.write(json.dumps(genre).encode())
    
        def do_POST(self):
            if self.path.endswith("/add"):
                ctype, pdict = cgi.parse_header(self.headers.get('content-type'))
                content_len = int(self.headers.get('Content-length'))
                if ctype == 'application/json':
                    payload = json.loads(self.rfile.read(content_len))
                    try:
                        connection = create_connection(DB_NAME)
                        c = connection.cursor()
                        genre_value = payload.get("name", None)
                        if genre_value:
                            query = "INSERT INTO genres(name) VALUES('{genre_value}')".format(genre_value=genre_value)
                            c.execute(query)
                            connection.commit()
                            connection.close()
                            self.send_response(201)
                            self.send_header('content-type', 'application/json')
                            self.end_headers()
                        else:
                            raise sqlite3.Error("Invalid key")
                    except sqlite3.Error as er:
                        print("SQLite Error: {}".format(er))
                        self.send_response(500)
                        self.send_header('content-type', 'text/text')
                        self.end_headers()
                        self.wfile.write("Failed to add...".encode())
    
    
    def populate_database():
        connection = create_connection(DB_NAME)
        print("Database opened successfully")
        sql_create_genre_table = """CREATE TABLE IF NOT EXISTS genres (
                                            id   INTEGER PRIMARY KEY AUTOINCREMENT,
                                            name TEXT NOT NULL UNIQUE
                                        );"""
        sql_insert_template = "INSERT INTO genres(name) VALUES('{}')"
        try:
            cursor = connection.cursor()
            cursor.execute(sql_create_genre_table)
            print("Table created successfully")
            cursor.execute(sql_insert_template.format('Pop'))
            cursor.execute(sql_insert_template.format('Rock'))
            connection.commit()
            print("Values inserted successfully")
        except Error as e:
            print(e)
        connection.close()
    
    
    def create_connection(db_file):
        try:
            return sqlite3.connect(db_file)
        except Error as e:
            print(e)
        return None
    
    
    def start_server():
        web_server = HTTPServer((HOST_NAME, HOST_PORT), MyServer)
        print(f"Server started http://{HOST_NAME}:{HOST_PORT}")
        try:
            web_server.serve_forever()
        except KeyboardInterrupt:
            pass
        web_server.server_close()
        print("Server stopped.")
    
    
    if __name__ == "__main__":
        populate_database()
        start_server()
    ```

3. Use the following command to run the script:
    ```bash
    % graalpy sqlite_rest.py
    ```

4. You should see output similar to:
    ```
    Database opened successfully
    Table created successfully
    Values inserted successfully
    Server started http://localhost:8080
    ```

5. Use `curl` to access the `/list` endpoint of the server, as follows:
```bash
% curl http://localhost:8080/list
{"id": 1, "name": "Pop"}{"id": 2, "name": "Rock"}
```

6. Use `curl` to access the `/add` endpoint of the server and then use the `/list` endpoint to confirm that the REST operation succeeded.
Run the following commands:

    ```bash
    % curl -X "POST" "http://localhost:8080/add" \
            -H 'Content-Type: application/json; charset=utf-8' \
            -d '{ "name": "Blues" }'
    % curl http://localhost:8080/list
    {"id": 1, "name": "Pop"}{"id": 2, "name": "Rock"}{"id": 3, "name": "Blues"}
    ```

7. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

8. Create a native executable based on your _sqlite_rest.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module sqlite_rest.py \
        --output sqlite_rest \
        --venv <venv-dir>
    …
    Finished generating 'sqlite_rest' in 34m 1s.
    ```

9. Run the executable, as follows:
    ```bash
    % ./sqlite_rest
    ```
And you should see the same output as earlier.

### Related Documentation
* [Getting Started](/getting_started/)
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Standalone Python Applications](/reference/standalone-applications/)