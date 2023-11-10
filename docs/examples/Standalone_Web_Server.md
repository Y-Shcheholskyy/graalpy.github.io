---
layout: page
title: Standalone Web Server
permalink: /examples/standalone_web_server/
---

This example provides a demonstration of creating a standalone web server, using the Python `http.server` module and GraalVM Native Image.

1. Install `graalpy` and [create a Virtual Environment](/guides/creating_a_virtual_environment/), then activate it. 
(For more information, see [Getting Started](/getting_started/).)

2. Copy the following contents into a file named _webserver.py_:

    ```python
    from http.server import BaseHTTPRequestHandler, HTTPServer
    
    host_name = "localhost"
    server_port = 8080
    
    class MyServer(BaseHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(bytes("<html><head><title>GraalPy Web Server</title></head>", "utf-8"))
            self.wfile.write(bytes("<body>", "utf-8"))
            self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
            self.wfile.write(bytes("<p>This is a GraalPy web server.</p>", "utf-8"))
            self.wfile.write(bytes("</body></html>", "utf-8"))
    
    if __name__ == "__main__":       
        web_server = HTTPServer((host_name, server_port), MyServer)
        print("Server started http://%s:%s" % (host_name, server_port))
    
        try:
            web_server.serve_forever()
        except KeyboardInterrupt:
            pass
    
        web_server.server_close()
        print("Server stopped.")
    ```

3. Use the following command to run the script:
    ```bash
    % graalpy webserver.py
    ```

4. You should see output similar to:
    ```
    Server started http://localhost:8080
    ```

5. Visit the URL with a web browser, and you should see something like:
![GraalPy web server](/examples/assets/GraalPy_Web_Server.png)

6. Unset your JAVA_HOME environment variable. 
(For example, on Linux and macOS, use the command `unset JAVA_HOME`.)

7. Create a native executable based on your _webserver.py_ script, as shown below.
(For more information about the command-line options, see [Standalone Python Applications](/reference/standalone-applications/).)

    ```bash
    % graalpy -m standalone native \
        --module webserver.py \
        --output webserver \
        --venv <venv-dir>
    …
    Finished generating 'webserver' in 29m 1s.
    ```

8. Run the executable, as follows:
    ```bash
    % ./webserver
    ```
And you should see the same output as earlier.

### Related Documentation
* [Getting Started](/getting_started/)
* [Creating a Virtual Environment](/guides/creating_a_virtual_environment/)
* [Standalone Python Applications](/reference/standalone-applications/)