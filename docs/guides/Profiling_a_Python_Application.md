## Profiling a Python Application

GraalPy provides three main profiling capabilities: a cpu sampler, a cpu tracer, and a memory tracer.
These are described below.

For more information about these tools, use the command `graalpy --help:tools`.

### CPU Sampler
Use the `--cpusampler` command-line option to take a CPU sample.
For example:

```bash
% graalpy --cpusampler currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}
<details><summary markdown="span">CPU Sampler Output (Click to expand)</summary>
```
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Sampling Histogram. Recorded 564 samples with period 10ms. Missed 235 samples.
  Self Time: Time spent on the top of the stack.
  Total Time: Time spent somewhere on the stack.
--------------------------------------------------------------------------------------------------------------------------------------------------------------
Thread[main,5,main]
 Name                                                                       ||             Total Time    ||              Self Time    || Location            
--------------------------------------------------------------------------------------------------------------------------------------------------------------
 parse_starttag                                                             ||             1090ms  19.3% ||              570ms  10.1% || <install-dir>/lib/python3.10/html/parser.py~300-347:11658-13539
 match                                                                      ||              190ms   3.4% ||              190ms   3.4% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~320-323:9862-10026
 _replace_cdata_list_attribute_values                                       ||              190ms   3.4% ||              190ms   3.4% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/__init__.py~295-331:11245-13031
 goahead                                                                    ||             1430ms  25.4% ||              150ms   2.7% || <install-dir>/lib/python3.10/html/parser.py~133-250:4711-9678
 check_for_whole_start_tag                                                  ||              130ms   2.3% ||              130ms   2.3% || <install-dir>/lib/python3.10/html/parser.py~351-382:13647-14758
 <module>                                                                   ||              800ms  14.2% ||              130ms   2.3% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~1-1296:0-47061
 <module>                                                                   ||             2480ms  44.0% ||              100ms   1.8% || <venv-dir>/lib/python3.10/site-packages/requests/__init__.py~6-180:82-4961
 <module>                                                                   ||              390ms   6.9% ||              100ms   1.8% || <install-dir>/lib/python3.10/struct.py~1-15:0-255
 _import_module                                                             ||              550ms   9.8% ||              100ms   1.8% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~85-88:2513-2653
 _compile                                                                   ||              100ms   1.8% ||               90ms   1.6% || <install-dir>/lib/python3.10/re.py~288-312:12701-13574
 __init__                                                                   ||              120ms   2.1% ||               90ms   1.6% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py~41-49:733-1039
 css_unescape                                                               ||               80ms   1.4% ||               80ms   1.4% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~251-275:7708-8433
 <module>                                                                   ||             1650ms  29.3% ||               80ms   1.4% || <venv-dir>/lib/python3.10/site-packages/urllib3/__init__.py~1-102:0-3331
 _read_headers                                                              ||               80ms   1.4% ||               80ms   1.4% || <install-dir>/lib/python3.10/http/client.py~206-222:7538-8106
 <module>                                                                   ||              160ms   2.8% ||               70ms   1.2% || <install-dir>/lib/python3.10/email/utils.py~5-371:109-13420
 <module>                                                                   ||               90ms   1.6% ||               70ms   1.2% || <install-dir>/lib/python3.10/zipfile.py~1-2474:0-88809
 <module>                                                                   ||              140ms   2.5% ||               70ms   1.2% || <install-dir>/lib/python3.10/logging/__init__.py~17-2261:987-80230
 <module>                                                                   ||              440ms   7.8% ||               70ms   1.2% || <install-dir>/lib/python3.10/http/client.py~1-1525:0-56715
 parse_endtag                                                               ||              150ms   2.7% ||               70ms   1.2% || <install-dir>/lib/python3.10/html/parser.py~385-422:14828-16432
 <module>                                                                   ||              390ms   6.9% ||               70ms   1.2% || <venv-dir>/lib/python3.10/site-packages/requests/compat.py~1-79:0-1449
 <module>                                                                   ||             1030ms  18.3% ||               70ms   1.2% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/__init__.py~2-631:58-24391
 pushTag                                                                    ||               60ms   1.1% ||               60ms   1.1% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~572-584:23369-23989
 read                                                                       ||               60ms   1.1% ||               60ms   1.1% || <install-dir>/lib/python3.10/ssl.py~1122-1141:37786-38481
 match                                                                      ||              120ms   2.1% ||               60ms   1.1% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~347-360:10735-11228
 PyTruffle_PopulateType                                                     ||               70ms   1.2% ||               60ms   1.1% || capi.c~721:0
 <module>                                                                   ||              450ms   8.0% ||               60ms   1.1% || <venv-dir>/lib/python3.10/site-packages/requests/exceptions.py~1-141:0-3809
 <module>                                                                   ||              190ms   3.4% ||               50ms   0.9% || <venv-dir>/lib/python3.10/site-packages/urllib3/connection.py~1-572:0-20298
 <module>                                                                   ||              120ms   2.1% ||               50ms   0.9% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/cd.py~1-390:0-12548
 <module>                                                                   ||             1160ms  20.6% ||               50ms   0.9% || <venv-dir>/lib/python3.10/site-packages/urllib3/exceptions.py~1-323:0-8215
 selector_iter                                                              ||              350ms   6.2% ||               50ms   0.9% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~1101-1140:40269-42196
 popTag                                                                     ||               50ms   0.9% ||               50ms   0.9% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~558-570:22729-23362
 <module>                                                                   ||               80ms   1.4% ||               40ms   0.7% || <install-dir>/lib/python3.10/urllib/request.py~1-2785:0-102141
 __init__                                                                   ||               40ms   0.7% ||               40ms   0.7% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~92-93:2687-2736
 <module>                                                                   ||              560ms   9.9% ||               40ms   0.7% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~21-1076:1102-34663
 _populate_class_variables                                                  ||               40ms   0.7% ||               40ms   0.7% || <venv-dir>/lib/python3.10/site-packages/bs4/dammit.py~70-187:2114-7532
 <module>                                                                   ||              180ms   3.2% ||               40ms   0.7% || <venv-dir>/lib/python3.10/site-packages/requests/utils.py~1-1094:0-33446
 <module>                                                                   ||               40ms   0.7% ||               30ms   0.5% || <install-dir>/lib/python3.10/email/message.py~5-1173:109-47056
 <module>                                                                   ||               30ms   0.5% ||               30ms   0.5% || <install-dir>/lib/python3.10/netrc.py~1-143:0-5745
 unescape                                                                   ||               30ms   0.5% ||               30ms   0.5% || <install-dir>/lib/python3.10/html/__init__.py~122-132:4295-4754
 <module>                                                                   ||              940ms  16.7% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~2-2430:58-92714
 <module>                                                                   ||               50ms   0.9% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~1-1034:0-35221
 _read_status                                                               ||               80ms   1.4% ||               30ms   0.5% || <install-dir>/lib/python3.10/http/client.py~278-309:10424-11634
 get_netrc_auth                                                             ||               60ms   1.1% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/requests/utils.py~199-253:6052-7890
 <module>                                                                   ||              270ms   4.8% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/urllib3/connectionpool.py~1-1132:0-39980
 <<llvm:initializeContext>>                                                 ||               30ms   0.5% ||               30ms   0.5% || <Unknown>
 PyType_Ready                                                               ||               80ms   1.4% ||               30ms   0.5% || typeobject.c~463:0
 <module>                                                                   ||             5630ms  99.8% ||               30ms   0.5% || currency_exchange.py~1-25:0-1128
 setup                                                                      ||               30ms   0.5% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~156-195:4751-6234
 <module>                                                                   ||              250ms   4.4% ||               30ms   0.5% || <install-dir>/lib/python3.10/email/_policybase.py~1-374:0-15071
 <module>                                                                   ||               60ms   1.1% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_.py~1-495:0-17163
 parse_headers                                                              ||              210ms   3.7% ||               30ms   0.5% || <install-dir>/lib/python3.10/http/client.py~224-236:8109-8637
 __hash__                                                                   ||               30ms   0.5% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py~73-76:1657-1729
 parsestr                                                                   ||               90ms   1.6% ||               30ms   0.5% || <install-dir>/lib/python3.10/email/parser.py~59-67:2207-2633
 <module>                                                                   ||               50ms   0.9% ||               30ms   0.5% || <install-dir>/lib/python3.10/email/header.py~5-578:125-24100
 <module>                                                                   ||              210ms   3.7% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/__init__.py~2-45:24-1463
 <module>                                                                   ||              100ms   1.8% ||               30ms   0.5% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/__init__.py~1-49:0-1153
 begin                                                                      ||              290ms   5.1% ||               30ms   0.5% || <install-dir>/lib/python3.10/http/client.py~311-381:11641-14258
 _make_key                                                                  ||               30ms   0.5% ||               20ms   0.4% || <install-dir>/lib/python3.10/functools.py~448-477:16650-17858
 handle_data                                                                ||               20ms   0.4% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~773-775:31264-31416
 PyDict_New                                                                 ||               20ms   0.4% ||               20ms   0.4% || capi.c~1505:0
 readinto                                                                   ||               90ms   1.6% ||               20ms   0.4% || <install-dir>/lib/python3.10/socket.py~691-712:26908-27720
 _Py_SIZE                                                                   ||               20ms   0.4% ||               20ms   0.4% || object_shared.c~59:0
 do_handshake                                                               ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/ssl.py~1337-1345:44860-45149
 create_connection                                                          ||               30ms   0.5% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/connection.py~37-97:1290-3422
 __init__                                                                   ||               50ms   0.9% ||               20ms   0.4% || <install-dir>/lib/python3.10/email/feedparser.py~139-167:4767-5847
 <module>                                                                   ||               20ms   0.4% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/urllib3/fields.py~1-274:0-8577
 endData                                                                    ||               40ms   0.7% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~586-618:23996-25326
 <module>                                                                   ||               30ms   0.5% ||               20ms   0.4% || <install-dir>/lib/python3.10/shutil.py~1-1509:0-54247
 is_empty_element                                                           ||               20ms   0.4% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~1372-1386:51654-52331
 __init__                                                                   ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/email/message.py~120-130:4362-4727
 __new__                                                                    ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/_py_abc.py~38-58:1423-2388
 <module>                                                                   ||               60ms   1.1% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_match.py~1-1590:0-58150
 __setitem__                                                                ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/collections/__init__.py~106-118:3659-4268
 __new__                                                                    ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/enum.py~678-722:26533-28360
 <module>                                                                   ||               30ms   0.5% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/idna/__init__.py~1-44:0-847
 <setcomp>                                                                  ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/enum.py~222-226:7740-7905
 <module>                                                                   ||               30ms   0.5% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py~1-408:0-10335
 <module>                                                                   ||               50ms   0.9% ||               20ms   0.4% || <install-dir>/lib/python3.10/importlib/util.py~1-302:0-11485
 <module>                                                                   ||              110ms   2.0% ||               20ms   0.4% || <install-dir>/lib/python3.10/http/cookiejar.py~1-2125:0-77413
 set_alpn_protocols                                                         ||               20ms   0.4% ||               20ms   0.4% || <install-dir>/lib/python3.10/ssl.py~563-572:17679-18058
 <module>                                                                   ||              820ms  14.5% ||               20ms   0.4% || <venv-dir>/lib/python3.10/site-packages/soupsieve/__init__.py~1-169:0-4628
 <module>                                                                   ||               30ms   0.5% ||               20ms   0.4% || <install-dir>/lib/python3.10/datetime.py~1-2524:0-88084
 _convert_                                                                  ||               60ms   1.1% ||               20ms   0.4% || <install-dir>/lib/python3.10/enum.py~536-567:21019-22379
 is_ipaddress                                                               ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_.py~457-467:15790-16287
 <LoadModulesNode/_cpython_struct.graalpy230-310-native-x86_64-darwin.so/4> ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/graalpy23.0/modules/_cpython_struct.graalpy230-310-native-x86_64-darwin.so~1:0
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/html/__init__.py~1-132:0-4754
 <module>                                                                   ||               50ms   0.9% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~1-2676:0-92555
 clear_cdata_mode                                                           ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/html/parser.py~126-128:4400-4503
 initialize_type_structure                                                  ||               10ms   0.2% ||               10ms   0.2% || capi.c~181:0
 <LoadModulesNode/_cpython_struct.graalpy230-310-native-x86_64-darwin.so/4> ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/graalpy23.0/modules/_cpython_struct.graalpy230-310-native-x86_64-darwin.so~1:0
 today                                                                      ||               20ms   0.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/datetime.py~833-836:28772-28892
 Message                                                                    ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/message.py~105-942:3620-37642
 fromtimestamp                                                              ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/datetime.py~827-830:28556-28748
 wrapper                                                                    ||               80ms   1.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/functools.py~566-621:21320-24144
 set_up_substitutions                                                       ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/__init__.py~453-494:17522-19257
 _add_filter                                                                ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/warnings.py~181-193:6485-6894
 <module>                                                                   ||               80ms   1.4% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/formatter.py~1-185:0-7182
 __init__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/feedparser.py~53-62:1880-2337
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/threading.py~1-1645:0-57198
 <lambda>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~83:3023-3070
 close                                                                      ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~768-776:29285-29591
 get_PyTypeObject_typeid                                                    ||               10ms   0.2% ||               10ms   0.2% || capi.c~334:0
 PyType_IsSubtype                                                           ||               10ms   0.2% ||               10ms   0.2% || capi.c~2109:0
 updatepos                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/_markupbase.py~44-55:1358-1737
 get                                                                        ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~1543-1547:58108-58336
 <module>                                                                   ||               30ms   0.5% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/certifi/core.py~1-108:0-4217
 _is_dunder                                                                 ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~935-936:31362-31439
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <string>~1:0-128
 <module>                                                                   ||              260ms   4.6% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/feedparser.py~5-536:124-22778
 __lt__                                                                     ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/datetime.py~1005-1008:34359-34488
 __hash__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~1247-1248:43583-43647
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/json/decoder.py~1-356:0-12471
 <module>                                                                   ||               40ms   0.7% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/models.py~1-337:0-11490
 _userinfo                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/urllib/parse.py~190-199:6686-7044
 __neg__                                                                    ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/datetime.py~634-639:22777-23026
 <module>                                                                   ||               20ms   0.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/importlib/_common.py~1-118:0-3220
 splitroot                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/pathlib.py~239-252:8403-9102
 getpos                                                                     ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/_markupbase.py~36-38:992-1101
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/idna/core.py~1-400:0-12948
 _find_data_type                                                            ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/enum.py~590-613:23082-24076
 PyTuple_New                                                                ||               10ms   0.2% ||               10ms   0.2% || capi.c~2097:0
 <module>                                                                   ||               20ms   0.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/random.py~1-930:0-33219
 __bool__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~1586-1588:59537-59631
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/lzma.py~1-356:0-13275
 <module>                                                                   ||              180ms   3.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/api.py~1-554:0-18622
 escape                                                                     ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/re.py~269-277:12193-12478
 handle_starttag                                                            ||              300ms   5.3% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~722-761:29203-30922
 __call__                                                                   ||               40ms   0.7% ||               10ms   0.2% || <install-dir>/lib/python3.10/enum.py~359-394:14295-15829
 <genexpr>                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~1333:46437-46490
 SocketIO                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~662-776:25907-29591
 <module>                                                                   ||               20ms   0.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/encodings/idna.py~3-309:67-9168
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/base64mime.py~5-119:111-3557
 text                                                                       ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~907-942:30396-31693
 ZipFile                                                                    ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/zipfile.py~1190-1941:40127-70543
 split_header_words                                                         ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/http/cookiejar.py~349-432:10819-14296
 PyTruffle_Log                                                              ||               10ms   0.2% ||               10ms   0.2% || capi.h~836:0
 <module>                                                                   ||               40ms   0.7% ||               10ms   0.2% || <install-dir>/lib/python3.10/linecache.py~1-182:0-5688
 <module>                                                                   ||               60ms   1.1% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~1-833:0-30371
 EntitySubstitution                                                         ||               50ms   0.9% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/dammit.py~67-314:1994-12462
 find_spec                                                                  ||              550ms   9.8% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~190-193:5454-5617
 initialize_graal_capi                                                      ||               30ms   0.5% ||               10ms   0.2% || capi.c~1336:0
 parse_tag_pattern                                                          ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~545-552:18463-18835
 <module>                                                                   ||              830ms  14.7% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/css.py~1-280:0-10075
 parse_url                                                                  ||               20ms   0.4% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/url.py~333-427:10998-14120
 _DocumentNav                                                               ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_match.py~79-376:2112-12140
 AsyncExitStack                                                             ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/contextlib.py~588-718:19981-25147
 __eq__                                                                     ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~705-712:23408-23858
 _shutdown                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/threading.py~1518-1568:52842-54704
 <module>                                                                   ||               50ms   0.9% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~4-960:93-36731
 PurePath                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/pathlib.py~540-915:17835-31041
 __init__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/parser.py~17-39:468-1493
 __get__                                                                    ||               30ms   0.5% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~95-104:2743-3101
 __repr__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~380-381:11795-11851
 getPyCapsuleTypeReference                                                  ||               10ms   0.2% ||               10ms   0.2% || capsule.c~13:0
 parse                                                                      ||               60ms   1.1% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/parser.py~41-57:1500-2200
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/copy.py~1-304:0-8679
 <module>                                                                   ||               20ms   0.4% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/md.py~1-571:0-18248
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~1-885:0-30759
 _normalize_host                                                            ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/url.py~274-302:8823-10070
 <module>                                                                   ||              270ms   4.8% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/parser.py~5-131:141-5039
 get_newfunc_typeid                                                         ||               10ms   0.2% ||               10ms   0.2% || capi.c~596:0
 PyTruffle_AllocMemory                                                      ||               10ms   0.2% ||               10ms   0.2% || obmalloc.c~77:0
 update_wrapper                                                             ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/functools.py~35-63:1398-2613
 __init__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/weakref.py~105-120:3343-4018
 <module>                                                                   ||               30ms   0.5% ||               10ms   0.2% || <install-dir>/lib/python3.10/tokenize.py~1-684:0-25919
 readable                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~730-735:28304-28504
 <module>                                                                   ||               50ms   0.9% ||               10ms   0.2% || <install-dir>/lib/python3.10/traceback.py~1-692:0-26216
 <module>                                                                   ||               60ms   1.1% ||               10ms   0.2% || <install-dir>/lib/python3.10/ssl.py~4-1530:116-52173
 <module>                                                                   ||               70ms   1.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/dammit.py~2-1094:24-41009
 __get_module                                                               ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~195-199:5624-5820
 parse_attribute_selector                                                   ||               90ms   1.6% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~475-543:15585-18456
 PyModule_AddObjectRef                                                      ||               10ms   0.2% ||               10ms   0.2% || capi.c~1765:0
 <module>                                                                   ||               40ms   0.7% ||               10ms   0.2% || <install-dir>/lib/python3.10/tempfile.py~1-876:0-29300
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/token.py~1-137:0-2384
 __instancecheck__                                                          ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/_py_abc.py~101-115:4105-4757
 _hostinfo                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/urllib/parse.py~202-213:7065-7494
 <module>                                                                   ||               40ms   0.7% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/certifi/__init__.py~1-4:0-92
 __new__                                                                    ||               20ms   0.4% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~943-956:35502-36030
 <lambda>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~93:3254-3299
 seed                                                                       ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/random.py~128-168:3350-4994
 __setattr__                                                                ||               20ms   0.4% ||               10ms   0.2% || <install-dir>/lib/python3.10/typing.py~986-991:33292-33578
 ssl_wrap_socket                                                            ||               60ms   1.1% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_.py~355-454:11698-15786
 <setcomp>                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/functools.py~191:7748-7829
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/email/_parseaddr.py~4-557:86-17819
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/connection.py~1-149:0-4899
 handle_starttag                                                            ||              350ms   6.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~105-158:3729-6091
 _LazyDescr                                                                 ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~91-104:2657-3101
 _PyModule_GetState                                                         ||               10ms   0.2% ||               10ms   0.2% || moduleobject.c~121:0
 __init__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/ipaddress.py~2178-2224:70743-72751
 abstractmethod                                                             ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/abc.py~7-25:161-830
 lru_cache                                                                  ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/functools.py~479-523:17861-19816
 __init__                                                                   ||              230ms   4.1% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~1199-1314:43856-49373
 getaddrinfo                                                                ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/socket.py~938-960:35491-36731
 <lambda>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/ssl.py~130:4038-4073
 <module>                                                                   ||               20ms   0.4% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~2-387:18-14917
 __init__                                                                   ||               10ms   0.2% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/request.py~40-41:1236-1305
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/queue.py~1-326:0-11494
 <module>                                                                   ||               40ms   0.7% ||               10ms   0.2% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_match_hostname.py~1-159:0-5756
 _parse_octet                                                               ||               10ms   0.2% ||               10ms   0.2% || <install-dir>/lib/python3.10/ipaddress.py~1200-1233:38793-40137
 <module>                                                                   ||               10ms   0.2% ||               10ms   0.2% || <string>~1:0-60
 connect                                                                    ||              150ms   2.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connection.py~361-477:12459-17002
 Struct___init__                                                            ||               20ms   0.4% ||                0ms   0.0% || _struct.c.h~25:0
 <genexpr>                                                                  ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1143:39760-39796
 send                                                                       ||              480ms   8.5% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~434-538:15493-19551
 _PyArg_UnpackKeywords                                                      ||               10ms   0.2% ||                0ms   0.0% || modsupport_shared.c~306:0
 search_tag                                                                 ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~2235-2293:84997-87417
 freeze                                                                     ||              120ms   2.1% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~398-416:12793-13387
 _popToTag                                                                  ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~688-720:27990-29196
 get                                                                        ||              640ms  11.3% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/api.py~62-73:3106-3566
 PyInit__cpython_struct                                                     ||               10ms   0.2% ||                0ms   0.0% || _cpython_struct.c~2499:0
 __init__                                                                   ||             1430ms  25.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~122-351:4513-14843
 _create_                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~483-534:18829-21012
 setdefault                                                                 ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/collections/__init__.py~247-255:8368-8679
 _get_mixins_                                                               ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~580-624:22801-24621
 init_poolmanager                                                           ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~173-197:5525-6499
 PyType_FromSpec                                                            ||               10ms   0.2% ||                0ms   0.0% || typeobject.c~1227:0
 filterwarnings                                                             ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/warnings.py~130-163:4300-5690
 request                                                                    ||              640ms  11.3% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/api.py~14-59:191-3102
 Policy                                                                     ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/email/_policybase.py~112-268:3846-10848
 __new__                                                                    ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/pathlib.py~957-964:32292-32647
 copy_with                                                                  ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1147-1149:39893-40037
 _new_conn                                                                  ||               30ms   0.5% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connection.py~161-190:5456-6351
 __init__                                                                   ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py~361-373:9167-9532
 handle_endtag                                                              ||               80ms   1.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~160-176:6110-6863
 feed                                                                       ||             1430ms  25.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/html/parser.py~103-110:3751-3999
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/_collections.py~141-150:4207-4567
 prepare_auth                                                               ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~589-609:18973-19700
 _resolve                                                                   ||              550ms   9.8% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~117-118:3373-3431
 _update_chunk_length                                                       ||               30ms   0.5% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~753-765:25695-26179
 request                                                                    ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connection.py~231-244:7872-8550
 <module>                                                                   ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/request.py~1-170:0-5983
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~135-155:4312-4967
 _structmodule_exec                                                         ||               80ms   1.4% ||                0ms   0.0% || _cpython_struct.c~2408:0
 __init__                                                                   ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~309-313:9604-9773
 <module>                                                                   ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/importlib/resources.py~1-185:0-5703
 _IPv4Constants                                                             ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~1532-1560:49717-50619
 handle_endtag                                                              ||               80ms   1.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~763-771:30929-31249
 namedtuple                                                                 ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/collections/__init__.py~328-496:10792-17123
 generate                                                                   ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~812-833:27230-28072
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~391-451:13943-16489
 getresponse                                                                ||              290ms   5.1% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/client.py~1330-1391:49452-51958
 add                                                                        ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/_collections.py~215-229:6500-7022
 _prepare_proxy                                                             ||              150ms   2.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connectionpool.py~994-1007:35337-35773
 wrap_socket                                                                ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/ssl.py~508-522:15578-16211
 prepare                                                                    ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~352-378:10758-11544
 parse_html_declaration                                                     ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/html/parser.py~255-272:9888-10632
 __getitem__                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~402-403:12365-12445
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~1272-1305:41066-42241
 get_resource_reader                                                        ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/importlib/_common.py~38-52:799-1420
 __getattr__                                                                ||              530ms   9.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~120-124:3438-3594
 __class_getitem__                                                          ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1324-1348:45972-47282
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~1465-1515:46942-49251
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/stringprep.py~2-272:58-12915
 find_all                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~2008-2031:76634-77805
 _create                                                                    ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/ssl.py~1016-1076:34122-36540
 from_httplib                                                               ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~634-663:21934-22935
 <module>                                                                   ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/packages.py~1-27:0-926
 contextmanager                                                             ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/contextlib.py~252-282:9584-10218
 username                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/urllib/parse.py~152-153:5510-5561
 __init__                                                                   ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/structures.py~40-44:1211-1369
 update                                                                     ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/_collections_abc.py~987-1003:27010-27769
 <module>                                                                   ||               60ms   1.1% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/api.py~1-157:0-6447
 send                                                                       ||              540ms   9.6% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~673-749:24848-27571
 get_auth_from_url                                                          ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/utils.py~1016-1029:30979-31325
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1016-1029:34578-35268
 process_selectors                                                          ||              570ms  10.1% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~1142-1145:42203-42399
 _SpecialForm                                                               ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~363-403:11317-12445
 copy                                                                       ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/structures.py~76-77:2331-2402
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/functools.py~441-443:16501-16592
 <module>                                                                   ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/filepost.py~1-98:0-2438
 merge_setting                                                              ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~61-88:1413-2443
 stream                                                                     ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~607-631:20883-21910
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/utils.py~1-417:0-11650
 _make_request                                                              ||              300ms   5.3% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connectionpool.py~378-495:12334-17147
 request_url                                                                ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~370-397:12968-14091
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/constant.py~1-495:0-19099
 select_proxy                                                               ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/utils.py~836-859:25624-26308
 extract_cookies                                                            ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/cookiejar.py~1685-1695:60405-60915
 __new__                                                                    ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~180-351:5813-14174
 <module>                                                                   ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~1-538:0-19551
 __and__                                                                    ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~986-989:37535-37726
 <module>                                                                   ||               30ms   0.5% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/url.py~1-435:0-14277
 _from_parts                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/pathlib.py~590-598:19760-20066
 PyModuleDef_Init                                                           ||               10ms   0.2% ||                0ms   0.0% || moduleobject.c~12:0
 _safe_read                                                                 ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/client.py~623-633:22457-22900
 <module>                                                                   ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/certs.py~3-17:23-425
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~947-951:31934-32101
 _type_check                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~146-177:3709-5202
 extend                                                                     ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/_collections.py~231-257:7029-8023
 _ip_int_from_string                                                        ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~1174-1197:38030-38769
 Optional                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~524-530:16317-16530
 urlopen                                                                    ||              460ms   8.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/connectionpool.py~533-905:18340-32775
 total_ordering                                                             ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/functools.py~188-199:7575-8171
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/urllib/parse.py~1-1196:0-42268
 close                                                                      ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/client.py~417-422:15369-15521
 _parse_args                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/pathlib.py~570-587:18996-19736
 TextIO                                                                     ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~2617-2649:91467-92054
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/html/parser.py~1-462:0-17390
 PyModule_AddType                                                           ||               10ms   0.2% ||                0ms   0.0% || modsupport_shared.c~70:0
 _tp_cache                                                                  ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~298-318:9198-9882
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/importlib/abc.py~1-442:0-14419
 handle_decl                                                                ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~250-258:9743-10011
 feed                                                                       ||             1430ms  25.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~372-387:14236-14917
 _handle_chunk                                                              ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~767-787:26186-27116
 <module>                                                                   ||               30ms   0.5% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~4-2287:80-74721
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/json/__init__.py~1-360:0-14033
 __or__                                                                     ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~980-984:37314-37528
 recv_into                                                                  ||               60ms   1.1% ||                0ms   0.0% || <install-dir>/lib/python3.10/ssl.py~1264-1277:42476-43011
 parse_selectors                                                            ||              560ms   9.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~921-1099:32674-40262
 parse_parts                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/pathlib.py~56-92:1471-2828
 _freeze_relations                                                          ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~388-396:12477-12786
 compile                                                                    ||              100ms   1.8% ||                0ms   0.0% || <install-dir>/lib/python3.10/re.py~249-251:11549-11686
 <listcomp>                                                                 ||               30ms   0.5% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~553-556:21826-21939
 handle_startendtag                                                         ||               30ms   0.5% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~90-103:3101-3714
 __prepare__                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/enum.py~166-178:5210-5806
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~329-340:10108-10590
 make_cookies                                                               ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/cookiejar.py~1604-1657:57294-59552
 PyTruffle_AllocateType                                                     ||               10ms   0.2% ||                0ms   0.0% || capi.c~874:0
 timezone                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/datetime.py~2185-2299:73839-77843
 parse_pseudo_open                                                          ||              370ms   6.6% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~742-763:26342-26949
 request                                                                    ||              630ms  11.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~502-591:18168-21735
 _find_all                                                                  ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~792-846:30683-33062
 _IPv6Constants                                                             ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/ipaddress.py~2254-2284:73659-74679
 PyType_FromModuleAndSpec                                                   ||               70ms   1.2% ||                0ms   0.0% || typeobject.c~968:0
 inner                                                                      ||               70ms   1.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~307-312:9547-9782
 search                                                                     ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~2298-2329:87481-88874
 find                                                                       ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/element.py~1982-2005:75544-76601
 decorator                                                                  ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~302-313:9385-9803
 get_connection                                                             ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/adapters.py~331-358:11500-12653
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/poolmanager.py~171-179:5673-6112
 path                                                                       ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/importlib/resources.py~107-126:3180-3931
 PyMem_RawMalloc                                                            ||               10ms   0.2% ||                0ms   0.0% || obmalloc.c~170:0
 handle_data                                                                ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py~178-180:6882-7012
 <module>                                                                   ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/contextlib.py~1-745:0-25880
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/importlib/readers.py~12-13:206-285
 _tunnel                                                                    ||               30ms   0.5% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/client.py~906-936:32282-33563
 __init__                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1128-1136:39120-39553
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/_markupbase.py~1-396:0-14651
 _feed                                                                      ||             1430ms  25.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~471-482:19173-19621
 content                                                                    ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~888-904:29725-30375
 <listcomp>                                                                 ||              120ms   2.1% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~1099:40214-40245
 prepare_url                                                                ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/models.py~410-482:12438-15100
 is_package                                                                 ||              540ms   9.6% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~215-222:6214-6481
 <module>                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/pathlib.py~1-1461:0-49573
 __init__                                                                   ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py~142-158:4014-4591
 CSSParser                                                                  ||               40ms   0.7% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~432-1145:13933-42399
 CharsetMatch                                                               ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/charset_normalizer/models.py~10-219:267-7410
 __getitem__                                                                ||               20ms   0.4% ||                0ms   0.0% || <install-dir>/lib/python3.10/typing.py~1139-1145:39575-39886
 _close_conn                                                                ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/http/client.py~412-415:15278-15362
 <module>                                                                   ||             1030ms  18.3% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py~1-840:0-33820
 _ssl_wrap_socket_impl                                                      ||               20ms   0.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_.py~481-495:16570-17163
 prepare_request                                                            ||               90ms   1.6% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/sessions.py~459-500:16595-18161
 __setitem__                                                                ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/structures.py~46-49:1376-1559
 extract_cookies_to_jar                                                     ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/requests/cookies.py~124-137:3446-4116
 where                                                                      ||               10ms   0.2% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/certifi/core.py~51-74:1820-3116
 __init__                                                                   ||               80ms   1.4% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py~204-232:5642-6438
 parse_pseudo_class                                                         ||              370ms   6.6% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py~582-675:19883-24010
 hostname                                                                   ||               10ms   0.2% ||                0ms   0.0% || <install-dir>/lib/python3.10/urllib/parse.py~160-168:5654-6078
 TopLevelExceptionHandler@dbeed1c                                           ||             5630ms  99.8% ||                0ms   0.0% || currency_exchange.py~1-25:0-1128
 read_chunked                                                               ||               50ms   0.9% ||                0ms   0.0% || <venv-dir>/lib/python3.10/site-packages/urllib3/response.py~789-857:27123-29805
--------------------------------------------------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

## CPU Tracer

Use the `--cputracer --cputracer.TraceStatements` command-line options to trace CPU usage.
For example:

```bash
% graalpy --cputracer --cputracer.TraceStatements currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}
<details><summary markdown="span">CPU Tracer Output (Click to Expand)</summary>
```
--------------------------------------------------------------------------------------------------------------------
Tracing Histogram. Counted a total of 1135 element executions.
  Total Count: Number of times the element was executed and percentage of total executions.
  Interpreted Count: Number of times the element was interpreted and percentage of total executions of this element.
  Compiled Count: Number of times the compiled element was executed and percentage of total executions of this element.
--------------------------------------------------------------------------------------------------------------------
 Name                                |          Total Count |    Interpreted Count |       Compiled Count | Location
--------------------------------------------------------------------------------------------------------------------
 get_newfunc_typeid                  |           110   9.7% |           110 100.0% |             0   0.0% | capi.c~596:0
 PyTruffle_PopulateType              |           110   9.7% |           110 100.0% |             0   0.0% | capi.c~721:0
 PyTruffle_AllocMemory               |            86   7.6% |            86 100.0% |             0   0.0% | obmalloc.c~77:0
 PyTruffle_AllocateType              |            66   5.8% |            66 100.0% |             0   0.0% | capi.c~874:0
 PyMem_RawMalloc                     |            66   5.8% |            66 100.0% |             0   0.0% | obmalloc.c~170:0
 initialize_type_structure           |            50   4.4% |            50 100.0% |             0   0.0% | capi.c~181:0
 _Py_TYPE                            |            45   4.0% |            45 100.0% |             0   0.0% | object_shared.c~55:0
 PyType_GetFlags                     |            41   3.6% |            41 100.0% |             0   0.0% | typeobject_shared.c~44:0
 get_tp_name                         |            37   3.3% |            37 100.0% |             0   0.0% | capi.c~507:0
 _Py_SIZE                            |            37   3.3% |            37 100.0% |             0   0.0% | object_shared.c~59:0
 _Py_IncRef                          |            32   2.8% |            32 100.0% |             0   0.0% | object_shared.c~105:0
 PyTuple_GetItem                     |            25   2.2% |            25 100.0% |             0   0.0% | capi.c~2089:0
 PyType_IsSubtype                    |            24   2.1% |            24 100.0% |             0   0.0% | capi.c~2109:0
 _Py_DecRef                          |            21   1.9% |            21 100.0% |             0   0.0% | object_shared.c~109:0
 truffle_get_constant                |            17   1.5% |            17 100.0% |             0   0.0% | capi.c~1262:0
 get_tp_dict                         |            15   1.3% |            15 100.0% |             0   0.0% | capi.c~444:0
 PyDict_SetItem                      |            15   1.3% |            15 100.0% |             0   0.0% | capi.c~1513:0
 _PyModule_GetState                  |            13   1.1% |            13 100.0% |             0   0.0% | moduleobject.c~121:0
 strlen                              |            12   1.1% |            12 100.0% |             0   0.0% | string.c~71:0
 PyObject_Size                       |            12   1.1% |            12 100.0% |             0   0.0% | capi.c~1921:0
 PyUnicode_FromString                |            11   1.0% |            11 100.0% |             0   0.0% | capi.c~2161:0
 _PyObject_GC_Malloc                 |            10   0.9% |            10 100.0% |             0   0.0% | obmalloc.c~228:0
 PyType_GenericAlloc                 |            10   0.9% |            10 100.0% |             0   0.0% | typeobject.c~56:0
 PyType_GetSlot                      |             7   0.6% |             7 100.0% |             0   0.0% | typeobject.c~1234:0
 s_new                               |             7   0.6% |             7 100.0% |             0   0.0% | _cpython_struct.c~1447:0
 _PyUnicode_FromId                   |             7   0.6% |             7 100.0% |             0   0.0% | unicodeobject.c~401:0
 _PyModule_GetDef                    |             7   0.6% |             7 100.0% |             0   0.0% | moduleobject.c~116:0
 PyBytes_AsString                    |             7   0.6% |             7 100.0% |             0   0.0% | bytesobject.c~76:0
 PyMem_Malloc                        |             7   0.6% |             7 100.0% |             0   0.0% | obmalloc.c~150:0
 Struct___init__                     |             7   0.6% |             7 100.0% |             0   0.0% | _struct.c.h~25:0
 _PyArg_UnpackKeywords               |             7   0.6% |             7 100.0% |             0   0.0% | modsupport_shared.c~306:0
 PyObject_Init                       |             7   0.6% |             7 100.0% |             0   0.0% | object_shared.c~160:0
 PyType_Ready                        |             7   0.6% |             7 100.0% |             0   0.0% | typeobject.c~463:0
 get_ob_type                         |             7   0.6% |             7 100.0% |             0   0.0% | capi.c~441:0
 _PyType_GetModuleByDef              |             7   0.6% |             7 100.0% |             0   0.0% | typeobject.c~1272:0
 PyModule_AddObjectRef               |             6   0.5% |             6 100.0% |             0   0.0% | capi.c~1765:0
 PyUnicode_AsASCIIString             |             6   0.5% |             6 100.0% |             0   0.0% | unicodeobject.c~288:0
 _PyUnicode_AsASCIIString            |             6   0.5% |             6 100.0% |             0   0.0% | capi.c~2281:0
 strcmp                              |             6   0.5% |             6 100.0% |             0   0.0% | string.c~83:0
 get_byte_array_typeid               |             6   0.5% |             6 100.0% |             0   0.0% | capi.c~576:0
 PyDict_GetItemWithError             |             5   0.4% |             5 100.0% |             0   0.0% | capi.c~1493:0
 PyLong_FromSsize_t                  |             5   0.4% |             5 100.0% |             0   0.0% | capi.c~1717:0
 calcsize                            |             5   0.4% |             5 100.0% |             0   0.0% | _struct.c.h~207:0
 PyTruffle_ADDREF                    |             5   0.4% |             5 100.0% |             0   0.0% | capi.c~611:0
 PyErr_Occurred                      |             5   0.4% |             5 100.0% |             0   0.0% | capi.c~1545:0
 PyThreadState_Get                   |             5   0.4% |             5 100.0% |             0   0.0% | capi.c~2041:0
 _PyObject_MakeTpCall                |             5   0.4% |             5 100.0% |             0   0.0% | object.c~155:0
 cache_struct_converter              |             5   0.4% |             5 100.0% |             0   0.0% | _cpython_struct.c~2138:0
 get_PyModuleDef_m_slots             |             4   0.4% |             4 100.0% |             0   0.0% | capi.c~563:0
 register_native_slots               |             4   0.4% |             4 100.0% |             0   0.0% | capi.c~1228:0
 PyDict_New                          |             4   0.4% |             4 100.0% |             0   0.0% | capi.c~1505:0
 PyTuple_New                         |             4   0.4% |             4 100.0% |             0   0.0% | capi.c~2097:0
 get_m_size                          |             4   0.4% |             4 100.0% |             0   0.0% | capi.c~521:0
 _PyDict_SetItemId                   |             4   0.4% |             4 100.0% |             0   0.0% | dictobject.c~173:0
 PyDict_Contains                     |             3   0.3% |             3 100.0% |             0   0.0% | capi.c~1477:0
 get_tp_bases                        |             3   0.3% |             3 100.0% |             0   0.0% | capi.c~446:0
 PyTuple_SetItem                     |             3   0.3% |             3 100.0% |             0   0.0% | capi.c~2101:0
 get_tp_subclasses                   |             3   0.3% |             3 100.0% |             0   0.0% | capi.c~509:0
 PyTuple_Pack                        |             3   0.3% |             3 100.0% |             0   0.0% | tupleobject.c~47:0
 PyDict_GetItem                      |             3   0.3% |             3 100.0% |             0   0.0% | capi.c~1489:0
 _PyDict_ContainsId                  |             3   0.3% |             3 100.0% |             0   0.0% | dictobject.c~162:0
 PyObject_InitVar                    |             3   0.3% |             3 100.0% |             0   0.0% | object_shared.c~170:0
 PyType_FromModuleAndSpec            |             3   0.3% |             3 100.0% |             0   0.0% | typeobject.c~968:0
 solid_base                          |             3   0.3% |             3 100.0% |             0   0.0% | typeobject.c~889:0
 PyUnicode_FromStringAndSize         |             3   0.3% |             3 100.0% |             0   0.0% | unicodeobject.c~171:0
 getPyCapsuleTypeReference           |             2   0.2% |             2 100.0% |             0   0.0% | capsule.c~13:0
 Py_IncRef                           |             2   0.2% |             2 100.0% |             0   0.0% | object_shared.c~119:0
 _Py_SET_TYPE                        |             2   0.2% |             2 100.0% |             0   0.0% | object_shared.c~63:0
 _PyType_DocWithoutSignature         |             2   0.2% |             2 100.0% |             0   0.0% | typeobject.c~162:0
 PyModuleDef_Init                    |             2   0.2% |             2 100.0% |             0   0.0% | moduleobject.c~12:0
 PyUnicode_DecodeUTF8Stateful        |             2   0.2% |             2 100.0% |             0   0.0% | unicodeobject.c~382:0
 get_m_doc                           |             2   0.2% |             2 100.0% |             0   0.0% | capi.c~522:0
 get_PyModuleDef_m_methods           |             2   0.2% |             2 100.0% |             0   0.0% | capi.c~546:0
 __sulong_byte_arrays_to_native      |             2   0.2% |             2 100.0% |             0   0.0% | crt0.c~74:0
 PyMem_RawCalloc                     |             2   0.2% |             2 100.0% |             0   0.0% | obmalloc.c~180:0
 _Py_SET_REFCNT                      |             2   0.2% |             2 100.0% |             0   0.0% | object_shared.c~50:0
 Py_DecRef                           |             2   0.2% |             2 100.0% |             0   0.0% | object_shared.c~125:0
 _PyType_Name                        |             2   0.2% |             2 100.0% |             0   0.0% | typeobject.c~1257:0
 set_PyDateTime_typeids              |             1   0.1% |             1 100.0% |             0   0.0% | datetime.c~73:0
 PyCapsule_New                       |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1413:0
 get_PyTypeObject_typeid             |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~334:0
 __sulong_exit                       |             1   0.1% |             1 100.0% |             0   0.0% | exit.c~99:0
 PyUnicode_InternInPlace             |             1   0.1% |             1 100.0% |             0   0.0% | unicodeobject.c~225:0
 get_PyDateTime_Delta_basicsize      |             1   0.1% |             1 100.0% |             0   0.0% | datetime.c~104:0
 PyType_FromSpec                     |             1   0.1% |             1 100.0% |             0   0.0% | typeobject.c~1227:0
 get_PyDateTime_DateTime_basicsize   |             1   0.1% |             1 100.0% |             0   0.0% | datetime.c~103:0
 initialize_native_locations         |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1315:0
 _PyObject_GenericGetDict            |             1   0.1% |             1 100.0% |             0   0.0% | dictobject.c~113:0
 _structmodule_exec                  |             1   0.1% |             1 100.0% |             0   0.0% | _cpython_struct.c~2408:0
 get_PyObject_typeid                 |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~332:0
 get_tp_mro                          |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~508:0
 PyTruffle_Log                       |             1   0.1% |             1 100.0% |             0   0.0% | capi.h~836:0
 get_PyDateTime_Time_basicsize       |             1   0.1% |             1 100.0% |             0   0.0% | datetime.c~102:0
 graal_hpy_init                      |             1   0.1% |             1 100.0% |             0   0.0% | hpy.c~83:0
 get_PyDateTime_Date_basicsize       |             1   0.1% |             1 100.0% |             0   0.0% | datetime.c~101:0
 __sulong_init_libc                  |             1   0.1% |             1 100.0% |             0   0.0% | crt0.c~81:0
 __sulong_init_context               |             1   0.1% |             1 100.0% |             0   0.0% | crt0.c~89:0
 PyErr_NewException                  |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1537:0
 forceVA                             |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1329:0
 initialize_exceptions               |             1   0.1% |             1 100.0% |             0   0.0% | exceptions.c~117:0
 initialize_hashes                   |             1   0.1% |             1 100.0% |             0   0.0% | pyhash.c~48:0
 PyTruffle_PatchType                 |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~713:0
 _PyTuple_SET_ITEM                   |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~2273:0
 PyObject_Malloc                     |             1   0.1% |             1 100.0% |             0   0.0% | obmalloc.c~132:0
 __sulong_dispose_context            |             1   0.1% |             1 100.0% |             0   0.0% | sulong_dispose_context.c~34:0
 PyDict_DelItemString                |             1   0.1% |             1 100.0% |             0   0.0% | dictobject.c~109:0
 initialize_graal_capi               |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1336:0
 ReadStringMember                    |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~1008:0
 PyInit__cpython_struct              |             1   0.1% |             1 100.0% |             0   0.0% | _cpython_struct.c~2499:0
 initialize_builtins                 |             1   0.1% |             1 100.0% |             0   0.0% | capi.c~167:0
 PyModule_AddType                    |             1   0.1% |             1 100.0% |             0   0.0% | modsupport_shared.c~70:0
--------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

### Memory Tracer

Use the `--memtracer --memtracer.TraceStatements` command-line options to trace memory usage.
For example:

```bash
% graalpy --experimental-options --memtracer --memtracer.TraceStatements currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}

<details><summary markdown="span">Memory Tracer Output (Click to Expand)</summary>
```
----------------------------------------------------------------------------
 Location Histogram with Allocation Counts. Recorded a total of 565 allocations.
   Total Count: Number of allocations during the execution of this element.
   Self Count: Number of allocations in this element alone (excluding sub calls).
----------------------------------------------------------------------------
 Name                         |      Self Count |     Total Count | Location
----------------------------------------------------------------------------
 PyTruffle_PopulateType       |      440  77.9% |      440  77.9% | capi.c~721:0
 PyType_Ready                 |       61  10.8% |       68  12.0% | typeobject.c~463:0
 _PyObject_MakeTpCall         |       20   3.5% |       24   4.2% | object.c~155:0
 PyUnicode_FromString         |       11   1.9% |       11   1.9% | capi.c~2161:0
 PyErr_NewException           |       11   1.9% |       11   1.9% | capi.c~1537:0
 _PyUnicode_AsASCIIString     |        6   1.1% |        6   1.1% | capi.c~2281:0
 PyDict_New                   |        4   0.7% |        4   0.7% | capi.c~1505:0
 PyTuple_New                  |        4   0.7% |        4   0.7% | capi.c~2097:0
 PyUnicode_FromStringAndSize  |        3   0.5% |        3   0.5% | unicodeobject.c~171:0
 PyUnicode_DecodeUTF8Stateful |        2   0.4% |        4   0.7% | unicodeobject.c~382:0
 PyTuple_GetItem              |        2   0.4% |        2   0.4% | capi.c~2089:0
 PyCapsule_New                |        1   0.2% |        1   0.2% | capi.c~1413:0
 PyType_FromModuleAndSpec     |        0   0.0% |       83  14.7% | typeobject.c~968:0
 _structmodule_exec           |        0   0.0% |       70  12.4% | _cpython_struct.c~2408:0
 PyType_FromSpec              |        0   0.0% |       28   5.0% | typeobject.c~1227:0
 cache_struct_converter       |        0   0.0% |       25   4.4% | _cpython_struct.c~2138:0
 calcsize                     |        0   0.0% |       25   4.4% | _struct.c.h~207:0
 Struct___init__              |        0   0.0% |        8   1.4% | _struct.c.h~25:0
 PyUnicode_AsASCIIString      |        0   0.0% |        6   1.1% | unicodeobject.c~288:0
 _PyUnicode_FromId            |        0   0.0% |        4   0.7% | unicodeobject.c~401:0
 PyTruffle_PatchType          |        0   0.0% |        4   0.7% | capi.c~713:0
 PyTuple_Pack                 |        0   0.0% |        3   0.5% | tupleobject.c~47:0
 _PyDict_ContainsId           |        0   0.0% |        2   0.4% | dictobject.c~162:0
 _PyArg_UnpackKeywords        |        0   0.0% |        2   0.4% | modsupport_shared.c~306:0
 _PyDict_SetItemId            |        0   0.0% |        2   0.4% | dictobject.c~173:0
 PyDict_DelItemString         |        0   0.0% |        1   0.2% | dictobject.c~109:0
----------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}
