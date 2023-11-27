---
layout: guides
title: Analyzing Python Source Code Coverage
permalink: /guides/analyzing_coverage/
---
<h4>Table of Contents</h4>
* this unordered seed list will be replaced by toc as unordered list
{:toc}

## Coverage

GraalPy provides a _coverage_ feature, using the `--coverage` command-line option.
(For details, use the `graalpy --help:tools` command.)
For example:

```bash
% graalpy --coverage currency_exchange.py
```

Gives example output:

{::options parse_block_html="true" /}
<details><summary markdown="span">Coverage (Click to expand)</summary>
```
------------------------------------------------------------------------------------------------------------------------------------------------
Code coverage histogram.
  Shows what percent of each element was covered during execution
------------------------------------------------------------------------------------------------------------------------------------------------
 Path                                                                                                       |  Statements |    Lines |    Roots
------------------------------------------------------------------------------------------------------------------------------------------------
 <venv-dir>/lib/python3.10/site-packages/_distutils_hack/__init__.py           |       0.00% |    0.00% |    0.00%
 <venv-dir>/lib/python3.10/site-packages/bs4/__init__.py                       |      56.10% |   56.14% |   55.26%
 <venv-dir>/lib/python3.10/site-packages/bs4/builder/__init__.py               |      79.12% |   78.84% |   50.00%
 <venv-dir>/lib/python3.10/site-packages/bs4/builder/_html5lib.py              |       2.41% |    2.46% |    2.38%
 <venv-dir>/lib/python3.10/site-packages/bs4/builder/_htmlparser.py            |      69.08% |   68.67% |   83.33%
 <venv-dir>/lib/python3.10/site-packages/bs4/builder/_lxml.py                  |       3.72% |    3.78% |    4.00%
 <venv-dir>/lib/python3.10/site-packages/bs4/css.py                            |      32.73% |   31.48% |   15.38%
 <venv-dir>/lib/python3.10/site-packages/bs4/dammit.py                         |      65.46% |   65.29% |   24.14%
 <venv-dir>/lib/python3.10/site-packages/bs4/element.py                        |      44.15% |   43.13% |   31.08%
 <venv-dir>/lib/python3.10/site-packages/bs4/formatter.py                      |      73.49% |   74.36% |   66.67%
 <venv-dir>/lib/python3.10/site-packages/certifi/__init__.py                   |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/certifi/core.py                       |      33.33% |   33.33% |   25.00%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/__init__.py        |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/api.py             |      11.87% |   11.94% |   16.67%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/assets/__init__.py |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/cd.py              |      12.81% |   13.54% |    4.35%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/constant.py        |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/legacy.py          |      25.00% |   25.00% |   50.00%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/md.py              |      22.05% |   20.37% |   17.24%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/models.py          |      38.46% |   38.50% |    9.30%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/utils.py           |      26.79% |   26.89% |    3.33%
 <venv-dir>/lib/python3.10/site-packages/charset_normalizer/version.py         |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/idna/__init__.py                      |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/idna/core.py                          |      13.83% |   12.70% |   21.74%
 <venv-dir>/lib/python3.10/site-packages/idna/idnadata.py                      |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/idna/intranges.py                     |      22.58% |   22.58% |   20.00%
 <venv-dir>/lib/python3.10/site-packages/idna/package_data.py                  |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/__init__.py                  |      64.38% |   64.38% |   66.67%
 <venv-dir>/lib/python3.10/site-packages/requests/__version__.py               |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/_internal_utils.py           |      87.50% |   87.50% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/adapters.py                  |      66.80% |   66.80% |   71.43%
 <venv-dir>/lib/python3.10/site-packages/requests/api.py                       |      65.00% |   65.00% |   33.33%
 <venv-dir>/lib/python3.10/site-packages/requests/auth.py                      |      20.60% |   19.07% |   20.00%
 <venv-dir>/lib/python3.10/site-packages/requests/certs.py                     |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/compat.py                    |      96.77% |   96.77% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/cookies.py                   |      38.97% |   37.89% |   40.00%
 <venv-dir>/lib/python3.10/site-packages/requests/exceptions.py                |      90.91% |   87.30% |   92.86%
 <venv-dir>/lib/python3.10/site-packages/requests/hooks.py                     |      62.50% |   60.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/models.py                    |      51.43% |   50.97% |   51.92%
 <venv-dir>/lib/python3.10/site-packages/requests/packages.py                  |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/sessions.py                  |      58.67% |   58.24% |   57.14%
 <venv-dir>/lib/python3.10/site-packages/requests/status_codes.py              |      98.86% |   98.84% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/requests/structures.py                |      76.09% |   76.19% |   57.89%
 <venv-dir>/lib/python3.10/site-packages/requests/utils.py                     |      36.43% |   36.38% |   43.48%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/__init__.py                 |      66.15% |   66.15% |   10.00%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/__meta__.py                 |      61.29% |   60.87% |   77.78%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/css_match.py                |      17.94% |   17.61% |    6.25%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/css_parser.py               |      62.84% |   62.61% |   68.42%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/css_types.py                |      75.64% |   78.20% |   35.59%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/pretty.py                   |      58.06% |   58.06% |   50.00%
 <venv-dir>/lib/python3.10/site-packages/soupsieve/util.py                     |      32.88% |   31.94% |   33.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/__init__.py                   |      72.09% |   72.09% |   33.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/_collections.py               |      50.00% |   50.53% |   32.43%
 <venv-dir>/lib/python3.10/site-packages/urllib3/_version.py                   |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/connection.py                 |      58.77% |   58.86% |   66.67%
 <venv-dir>/lib/python3.10/site-packages/urllib3/connectionpool.py             |      58.58% |   58.35% |   61.29%
 <venv-dir>/lib/python3.10/site-packages/urllib3/contrib/__init__.py           |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/contrib/_appengine_environ.py |      68.75% |   68.75% |   83.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/contrib/socks.py              |       9.48% |    9.91% |   11.11%
 <venv-dir>/lib/python3.10/site-packages/urllib3/exceptions.py                 |      79.19% |   74.38% |   71.70%
 <venv-dir>/lib/python3.10/site-packages/urllib3/fields.py                     |      30.36% |   28.97% |   18.75%
 <venv-dir>/lib/python3.10/site-packages/urllib3/filepost.py                   |      28.89% |   30.23% |   14.29%
 <venv-dir>/lib/python3.10/site-packages/urllib3/packages/__init__.py          |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/packages/six.py               |      64.46% |   64.40% |   42.05%
 <venv-dir>/lib/python3.10/site-packages/urllib3/poolmanager.py                |      59.43% |   59.05% |   68.18%
 <venv-dir>/lib/python3.10/site-packages/urllib3/request.py                    |      39.29% |   38.18% |   42.86%
 <venv-dir>/lib/python3.10/site-packages/urllib3/response.py                   |      50.40% |   50.31% |   43.64%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/__init__.py              |     100.00% |  100.00% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/connection.py            |      64.47% |   64.47% |   83.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/proxy.py                 |      40.00% |   40.00% |   66.67%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/queue.py                 |      93.33% |   92.86% |  100.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/request.py               |      59.09% |   59.09% |   75.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/response.py              |      50.00% |   52.38% |   60.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/retry.py                 |      35.79% |   35.25% |   25.00%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_.py                  |      52.89% |   53.13% |   47.06%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssl_match_hostname.py    |      44.87% |   44.16% |   83.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/ssltransport.py          |      25.34% |   24.83% |    7.41%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/timeout.py               |      52.94% |   52.38% |   83.33%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/url.py                   |      67.65% |   66.95% |   66.67%
 <venv-dir>/lib/python3.10/site-packages/urllib3/util/wait.py                  |      24.36% |   23.38% |   16.67%
 <install-dir>/lib/python3.10/__future__.py                                    |      91.23% |   91.07% |   50.00%
 <install-dir>/lib/python3.10/_collections_abc.py                              |      10.64% |   10.86% |   13.08%
 <install-dir>/lib/python3.10/_compression.py                                  |      22.02% |   20.56% |   17.65%
 <install-dir>/lib/python3.10/_markupbase.py                                   |      16.67% |   16.37% |   37.50%
 <install-dir>/lib/python3.10/_py_abc.py                                       |      74.07% |   74.36% |   60.00%
 <install-dir>/lib/python3.10/_sitebuiltins.py                                 |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/_weakrefset.py                                   |      25.86% |   27.52% |   16.67%
 <install-dir>/lib/python3.10/abc.py                                           |      10.53% |   10.53% |   25.00%
 <install-dir>/lib/python3.10/base64.py                                        |      17.24% |   17.80% |    2.70%
 <install-dir>/lib/python3.10/bisect.py                                        |      21.57% |   21.57% |   20.00%
 <install-dir>/lib/python3.10/bz2.py                                           |      22.22% |   21.74% |    9.09%
 <install-dir>/lib/python3.10/calendar.py                                      |      28.84% |   28.25% |   17.53%
 <install-dir>/lib/python3.10/collections/__init__.py                          |      12.58% |   12.71% |    5.69%
 <install-dir>/lib/python3.10/collections/abc.py                               |     100.00% |  100.00% |  100.00%
 <install-dir>/lib/python3.10/contextlib.py                                    |      40.80% |   37.99% |   31.71%
 <install-dir>/lib/python3.10/copy.py                                          |      36.36% |   36.41% |   21.43%
 <install-dir>/lib/python3.10/copyreg.py                                       |       3.20% |    3.20% |    7.69%
 <install-dir>/lib/python3.10/csv.py                                           |      25.17% |   23.91% |   25.00%
 <install-dir>/lib/python3.10/datetime.py                                      |      30.32% |   30.01% |   14.74%
 <install-dir>/lib/python3.10/email/__init__.py                                |      42.86% |   42.86% |   20.00%
 <install-dir>/lib/python3.10/email/_encoded_words.py                          |      35.11% |   34.44% |   14.29%
 <install-dir>/lib/python3.10/email/_parseaddr.py                              |      12.64% |   12.15% |   10.71%
 <install-dir>/lib/python3.10/email/_policybase.py                             |      55.22% |   54.69% |   39.29%
 <install-dir>/lib/python3.10/email/base64mime.py                              |      35.00% |   35.00% |   20.00%
 <install-dir>/lib/python3.10/email/charset.py                                 |      55.49% |   55.23% |   20.00%
 <install-dir>/lib/python3.10/email/encoders.py                                |      31.03% |   31.03% |   16.67%
 <install-dir>/lib/python3.10/email/errors.py                                  |      91.30% |   87.88% |   87.10%
 <install-dir>/lib/python3.10/email/feedparser.py                              |      40.97% |   40.46% |   79.17%
 <install-dir>/lib/python3.10/email/header.py                                  |      17.93% |   17.45% |   11.76%
 <install-dir>/lib/python3.10/email/iterators.py                      |      26.67% |   26.67% |   20.00%
 <install-dir>/lib/python3.10/email/message.py                        |      24.71% |   24.37% |   19.75%
 <install-dir>/lib/python3.10/email/parser.py                         |      73.91% |   71.43% |   53.33%
 <install-dir>/lib/python3.10/email/quoprimime.py                     |      27.97% |   27.83% |   12.50%
 <install-dir>/lib/python3.10/email/utils.py                          |      23.12% |   23.24% |   11.11%
 <install-dir>/lib/python3.10/encodings/idna.py                       |      21.29% |   19.49% |   50.00%
 <install-dir>/lib/python3.10/enum.py                                 |      55.84% |   55.85% |   43.42%
 <install-dir>/lib/python3.10/fnmatch.py                              |      12.20% |   12.40% |   14.29%
 <install-dir>/lib/python3.10/functools.py                            |      19.02% |   19.15% |   18.89%
 <install-dir>/lib/python3.10/genericpath.py                          |      13.79% |   13.79% |   15.38%
 <install-dir>/lib/python3.10/hashlib.py                              |      43.17% |   42.34% |   55.56%
 <install-dir>/lib/python3.10/heapq.py                                |      13.48% |   13.90% |    4.17%
 <install-dir>/lib/python3.10/hmac.py                                 |      23.58% |   22.41% |   21.05%
 <install-dir>/lib/python3.10/html/__init__.py                        |      75.86% |   75.86% |   75.00%
 <install-dir>/lib/python3.10/html/entities.py                        |     100.00% |  100.00% |  100.00%
 <install-dir>/lib/python3.10/html/parser.py                          |      58.90% |   58.76% |   50.00%
 <install-dir>/lib/python3.10/http/__init__.py                        |     100.00% |  100.00% |  100.00%
 <install-dir>/lib/python3.10/http/client.py                          |      46.74% |   45.42% |   59.30%
 <install-dir>/lib/python3.10/http/cookiejar.py                       |      38.27% |   37.77% |   44.76%
 <install-dir>/lib/python3.10/http/cookies.py                         |      33.46% |   31.94% |   15.79%
 <install-dir>/lib/python3.10/importlib/__init__.py                   |      28.30% |   28.30% |   40.00%
 <install-dir>/lib/python3.10/importlib/_abc.py                       |      58.82% |   56.25% |   40.00%
 <install-dir>/lib/python3.10/importlib/_adapters.py                  |      72.00% |   68.89% |   42.86%
 <install-dir>/lib/python3.10/importlib/_common.py                    |      66.07% |   66.07% |   50.00%
 <install-dir>/lib/python3.10/importlib/abc.py                        |      60.42% |   58.33% |   27.08%
 <install-dir>/lib/python3.10/importlib/machinery.py                  |      92.31% |   92.31% |   50.00%
 <install-dir>/lib/python3.10/importlib/readers.py                    |      46.34% |   44.74% |   25.00%
 <install-dir>/lib/python3.10/importlib/resources.py                  |      49.53% |   50.00% |   28.57%
 <install-dir>/lib/python3.10/importlib/util.py                       |      24.28% |   23.53% |   13.64%
 <install-dir>/lib/python3.10/io.py                                   |      28.57% |   28.57% |  100.00%
 <install-dir>/lib/python3.10/ipaddress.py                            |      43.50% |   42.79% |   20.86%
 <install-dir>/lib/python3.10/json/__init__.py                        |      27.00% |   27.00% |   16.67%
 <install-dir>/lib/python3.10/json/decoder.py                         |      22.97% |   22.27% |   33.33%
 <install-dir>/lib/python3.10/json/encoder.py                         |      22.10% |   21.80% |   20.00%
 <install-dir>/lib/python3.10/json/scanner.py                         |      16.67% |   16.67% |   25.00%
 <install-dir>/lib/python3.10/keyword.py                              |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/linecache.py                            |      11.50% |   11.61% |   12.50%
 <install-dir>/lib/python3.10/locale.py                               |       4.35% |    4.35% |   17.65%
 <install-dir>/lib/python3.10/logging/__init__.py                     |      43.50% |   42.43% |   32.94%
 <install-dir>/lib/python3.10/lzma.py                                 |      23.33% |   22.82% |   10.53%
 <install-dir>/lib/python3.10/mimetypes.py                            |      55.20% |   55.23% |   13.64%
 <install-dir>/lib/python3.10/netrc.py                                |      13.11% |   11.67% |   33.33%
 <install-dir>/lib/python3.10/ntpath.py                               |      10.89% |   11.09% |    3.03%
 <install-dir>/lib/python3.10/operator.py                             |       5.65% |    5.78% |    4.11%
 <install-dir>/lib/python3.10/os.py                                   |       8.11% |    7.76% |   15.22%
 <install-dir>/lib/python3.10/pathlib.py                              |      38.15% |   36.92% |   23.13%
 <install-dir>/lib/python3.10/posixpath.py                            |       8.31% |    8.47% |   15.38%
 <install-dir>/lib/python3.10/queue.py                                |      55.19% |   54.05% |   25.00%
 <install-dir>/lib/python3.10/quopri.py                               |      13.10% |   13.10% |    9.09%
 <install-dir>/lib/python3.10/random.py                               |      24.65% |   24.64% |   13.95%
 <install-dir>/lib/python3.10/re.py                                   |      10.90% |   11.11% |   16.00%
 <install-dir>/lib/python3.10/reprlib.py                              |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/selectors.py                            |      22.11% |   21.29% |   12.96%
 <install-dir>/lib/python3.10/shlex.py                                |      10.83% |   10.55% |   11.11%
 <install-dir>/lib/python3.10/shutil.py                               |      15.64% |   15.10% |   10.96%
 <install-dir>/lib/python3.10/site.py                                 |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/socket.py                               |      28.93% |   28.09% |   41.51%
 <install-dir>/lib/python3.10/sre_compile.py                          |       0.17% |    0.18% |    4.00%
 <install-dir>/lib/python3.10/sre_constants.py                        |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/sre_parse.py                            |       0.00% |    0.00% |    0.00%
 <install-dir>/lib/python3.10/ssl.py                                  |      47.48% |   46.62% |   30.16%
 <install-dir>/lib/python3.10/stat.py                                 |      10.00% |   10.00% |   15.38%
 <install-dir>/lib/python3.10/string.py                               |      34.44% |   33.78% |   19.05%
 <install-dir>/lib/python3.10/stringprep.py                           |      83.48% |   83.84% |    4.76%
 <install-dir>/lib/python3.10/struct.py                               |     100.00% |  100.00% |  100.00%
 <install-dir>/lib/python3.10/tempfile.py                             |      25.56% |   24.79% |    8.22%
 <install-dir>/lib/python3.10/threading.py                            |      39.74% |   38.85% |   28.70%
 <install-dir>/lib/python3.10/token.py                                |      97.66% |   97.62% |   40.00%
 <install-dir>/lib/python3.10/tokenize.py                             |      23.43% |   22.08% |   34.48%
 <install-dir>/lib/python3.10/traceback.py                            |      19.95% |   19.17% |   10.87%
 <install-dir>/lib/python3.10/types.py                                |       2.44% |    2.44% |    3.57%
 <install-dir>/lib/python3.10/typing.py                               |      49.86% |   48.93% |   34.60%
 <install-dir>/lib/python3.10/urllib/__init__.py                      |     100.00% |  100.00% |  100.00%
 <install-dir>/lib/python3.10/urllib/error.py                         |      55.81% |   52.50% |   30.77%
 <install-dir>/lib/python3.10/urllib/parse.py                         |      43.91% |   43.33% |   35.29%
 <install-dir>/lib/python3.10/urllib/request.py                       |      16.92% |   15.71% |   16.06%
 <install-dir>/lib/python3.10/urllib/response.py                      |      50.00% |   46.15% |   29.41%
 <install-dir>/lib/python3.10/uu.py                                   |      10.57% |    9.84% |   40.00%
 <install-dir>/lib/python3.10/warnings.py                             |      21.29% |   20.77% |   25.00%
 <install-dir>/lib/python3.10/weakref.py                              |      37.93% |   36.78% |   23.68%
 <install-dir>/lib/python3.10/zipfile.py                              |      17.86% |   17.23% |   11.03%
 <src-dir>/currency_exchange.py                                       |     100.00% |  100.00% |  100.00%
 <frozen graalpy.sulong_support>                                                                            |        NaN% |          |    0.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |      25.00% |   25.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |       0.00% |    0.00% |    0.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |       0.00% |    0.00% |    0.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |       0.00% |    0.00% |    0.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 <string>                                                                                                   |     100.00% |  100.00% |  100.00%
 com.oracle.truffle.llvm.libraries.bitcode/src/crt0.c                                                       |     100.00% |          |  100.00%
 com.oracle.truffle.llvm.libraries.bitcode/src/exit.c                                                       |      41.67% |          |  100.00%
 com.oracle.truffle.llvm.libraries.bitcode/src/string.c                                                     |      80.65% |          |  100.00%
 com.oracle.truffle.llvm.libraries.bitcode/src/sulong_dispose_context.c                                     |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/hpy/hpy.c                                                         |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/include/cpython/abstract.h                                        |      64.29% |          |    0.00%
 graalpython/com.oracle.graal.python.cext/include/internal/pycore_object.h                                  |     100.00% |          |    0.00%
 graalpython/com.oracle.graal.python.cext/include/object.h                                                  |      63.89% |          |    0.00%
 graalpython/com.oracle.graal.python.cext/modules/_cpython_struct.c                                         |      75.00% |          |   66.67%
 graalpython/com.oracle.graal.python.cext/modules/clinic/_struct.c.h                                        |      88.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/bytesobject.c                                                 |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/capi.c                                                        |      94.44% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/capi.h                                                        |      75.68% |          |   10.00%
 graalpython/com.oracle.graal.python.cext/src/capsule.c                                                     |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/datetime.c                                                    |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/dictobject.c                                                  |      55.56% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/exceptions.c                                                  |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/modsupport_shared.c                                           |      27.52% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/moduleobject.c                                                |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/object.c                                                      |      42.86% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/object_shared.c                                               |      70.15% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/obmalloc.c                                                    |      71.70% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/pyhash.c                                                      |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/tupleobject.c                                                 |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/typeobject.c                                                  |      71.85% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/typeobject_shared.c                                           |     100.00% |          |  100.00%
 graalpython/com.oracle.graal.python.cext/src/unicodeobject.c                                               |      67.50% |          |  100.00%
 main/sulong/mxbuild/darwin-amd64/SULONG_HOME/include/graalvm/llvm/internal/handles-impl.h                  |     100.00% |          |    0.00%
 main/sulong/mxbuild/darwin-amd64/SULONG_HOME/include/graalvm/llvm/internal/polyglot-impl.h                 |     100.00% |          |    0.00%
------------------------------------------------------------------------------------------------------------------------------------------------
```
</details>
{::options parse_block_html="false" /}

## Trace

The standard Python `trace` module is also provided.
> Note: This works in the same way as CPython.
The programmatic API also works, with some limitations: 
it does not currently track calls, only line counts and called functions.

For example: 

```bash
% graalpy -m trace -c -s text_styler.py Welcome to GraalPy!
```

Gives example output:

{::options parse_block_html="true" /}
<details><summary markdown="span">Trace (Click to expand)</summary>
```
_       __     __                             __     
| |     / /__  / /________  ____ ___  ___     / /_____
| | /| / / _ \/ / ___/ __ \/ __ `__ \/ _ \   / __/ __ \
| |/ |/ /  __/ / /__/ /_/ / / / / / /  __/  / /_/ /_/ /
|__/|__/\___/_/\___/\____/_/ /_/ /_/\___/   \__/\____/
                                                        
   ______                 ______        __
  / ____/________ _____ _/ / __ \__  __/ /
 / / __/ ___/ __ `/ __ `/ / /_/ / / / / /
/ /_/ / /  / /_/ / /_/ / / ____/ /_/ /_/ 
\____/_/   \__,_/\__,_/_/_/    \__, (_)  
                              /____/     
 
lines   cov%   module   (path)
    9   100%   __about__   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/__about__.py)
   51   100%   __future__   (<install-dir>/lib/python3.10/__future__.py)
    1   100%   __init__   (<venv-dir>/lib/python3.10/site-packages/pyfiglet/fonts/__init__.py)
   27   100%   _adapters   (<install-dir>/lib/python3.10/importlib/_adapters.py)
   25   100%   _common   (<install-dir>/lib/python3.10/importlib/_common.py)
   44   100%   _manylinux   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/_manylinux.py)
   20   100%   _musllinux   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/_musllinux.py)
   66   100%   _osx_support   (<install-dir>/lib/python3.10/_osx_support.py)
   43   100%   _parseaddr   (<install-dir>/lib/python3.10/email/_parseaddr.py)
   62   100%   _policybase   (<install-dir>/lib/python3.10/email/_policybase.py)
   20   100%   _structures   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/_structures.py)
  105   100%   abc   (<install-dir>/lib/python3.10/importlib/abc.py)
   18   100%   actions   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/actions.py)
   41   100%   appdirs   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/appdirs.py)
   59   100%   base64   (<install-dir>/lib/python3.10/base64.py)
   14   100%   base64mime   (<install-dir>/lib/python3.10/email/base64mime.py)
   11   100%   bisect   (<install-dir>/lib/python3.10/bisect.py)
  124   100%   calendar   (<install-dir>/lib/python3.10/calendar.py)
   94   100%   charset   (<install-dir>/lib/python3.10/email/charset.py)
  122   100%   common   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/common.py)
   40   100%   context   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/jaraco/context.py)
    3   100%   contextlib   (<install-dir>/lib/python3.10/contextlib.py)
   91   100%   copy   (<install-dir>/lib/python3.10/copy.py)
 1497   100%   core   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/core.py)
  108   100%   dataclasses   (<install-dir>/lib/python3.10/dataclasses.py)
   31   100%   datetime   (<install-dir>/lib/python3.10/datetime.py)
    9   100%   encoders   (<install-dir>/lib/python3.10/email/encoders.py)
 2493   100%   entities   (<install-dir>/lib/python3.10/html/entities.py)
   58   100%   errors   (<install-dir>/lib/python3.10/email/errors.py)
   49   100%   exceptions   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/exceptions.py)
    5   100%   expat   (<install-dir>/lib/python3.10/xml/parsers/expat.py)
   41   100%   feedparser   (<install-dir>/lib/python3.10/email/feedparser.py)
   45   100%   functools   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/jaraco/functools.py)
   69   100%   gettext   (<install-dir>/lib/python3.10/gettext.py)
   56   100%   header   (<install-dir>/lib/python3.10/email/header.py)
  162   100%   helpers   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/helpers.py)
    1   100%   inspect   (<install-dir>/lib/python3.10/inspect.py)
   47   100%   linecache   (<install-dir>/lib/python3.10/linecache.py)
   95   100%   markers   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/markers.py)
  192   100%   more   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/more_itertools/more.py)
  204   100%   optparse   (<install-dir>/lib/python3.10/optparse.py)
   14   100%   os   (<install-dir>/lib/python3.10/os.py)
  167   100%   parse   (<install-dir>/lib/python3.10/urllib/parse.py)
   19   100%   parser   (<install-dir>/lib/python3.10/email/parser.py)
  242   100%   pathlib   (<install-dir>/lib/python3.10/pathlib.py)
   66   100%   pkgutil   (<install-dir>/lib/python3.10/pkgutil.py)
  137   100%   platform   (<install-dir>/lib/python3.10/platform.py)
  102   100%   plistlib   (<install-dir>/lib/python3.10/plistlib.py)
   79   100%   pprint   (<install-dir>/lib/python3.10/pprint.py)
   54   100%   queue   (<install-dir>/lib/python3.10/queue.py)
   21   100%   quopri   (<install-dir>/lib/python3.10/quopri.py)
   32   100%   quoprimime   (<install-dir>/lib/python3.10/email/quoprimime.py)
  101   100%   random   (<install-dir>/lib/python3.10/random.py)
   43   100%   recipes   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/more_itertools/recipes.py)
   51   100%   requirements   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/requirements.py)
   46   100%   resources   (<install-dir>/lib/python3.10/importlib/resources.py)
  155   100%   results   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/results.py)
   79   100%   selectors   (<install-dir>/lib/python3.10/selectors.py)
   30   100%   signal   (<install-dir>/lib/python3.10/signal.py)
   94   100%   socket   (<install-dir>/lib/python3.10/socket.py)
  143   100%   specifiers   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/specifiers.py)
   50   100%   string   (<install-dir>/lib/python3.10/string.py)
  118   100%   subprocess   (<install-dir>/lib/python3.10/subprocess.py)
   96   100%   sysconfig   (<install-dir>/lib/python3.10/sysconfig.py)
   67   100%   tags   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/tags.py)
  119   100%   tempfile   (<install-dir>/lib/python3.10/tempfile.py)
   35   100%   testing   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/testing.py)
    7   100%   text_styler   (<src-dir>/text_styler.py)
   51   100%   textwrap   (<install-dir>/lib/python3.10/textwrap.py)
    2   100%   threading   (<install-dir>/lib/python3.10/threading.py)
   32   100%   tokenize   (<install-dir>/lib/python3.10/tokenize.py)
   43   100%   traceback   (<install-dir>/lib/python3.10/traceback.py)
  703   100%   typing   (<install-dir>/lib/python3.10/typing.py)
  238   100%   unicode   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/unicode.py)
   76   100%   util   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/pyparsing/util.py)
   20   100%   utils   (<venv-dir>/lib/python3.10/site-packages/pkg_resources/_vendor/packaging/utils.py)
    1   100%   version   (<venv-dir>/lib/python3.10/site-packages/pyfiglet/version.py)
   16   100%   warnings   (<install-dir>/lib/python3.10/warnings.py)
  127   100%   weakref   (<install-dir>/lib/python3.10/weakref.py)
  432   100%   zipfile   (<install-dir>/lib/python3.10/zipfile.py)
```
</details>
{::options parse_block_html="false" /}

## Related Documentation
{:.no_toc}
* [GraalVM Code Coverage Tool](ttps://www.graalvm.org/latest/tools/code-coverage/)
* [Python Trace](https://docs.python.org/3/library/trace.html)