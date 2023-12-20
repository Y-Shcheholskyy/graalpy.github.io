## Profiling a Python Application

GraalPy provides three main profiling capabilities: a CPU sampler, a CPU tracer, and a memory tracer.
These are described below. (For details, use the `graalpy --help:tools` command.)

Start by [creating a demo application](Creating_a_Demo_Application.md).

<br>

### CPU Sampler

Use the `--cpusampler` command-line option to take a CPU sample.
```bash
graalpy --cpusampler currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}
<details><summary markdown="span">CPU Sampler Output (Click to expand)</summary>
```bash
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
 ...
--------------------------------------------------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

<br>

### CPU Tracer

Use the `--cputracer --cputracer.TraceStatements` command-line options to trace CPU usage.
```bash
graalpy --cputracer --cputracer.TraceStatements currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}
<details><summary markdown="span">CPU Tracer Output (Click to Expand)</summary>
```bash
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
 ...    
--------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

<br>

### Memory Tracer

Use the `--memtracer --memtracer.TraceStatements` command-line options to trace memory usage.
```bash
graalpy --experimental-options --memtracer --memtracer.TraceStatements currency_exchange.py
```

You should see output similar to:

{::options parse_block_html="true" /}

<details><summary markdown="span">Memory Tracer Output (Click to Expand)</summary>
```bash
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
 ...
----------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

<br>