document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-400c181cb6431951ea5479cf30c36933.css">')
document.write('<div id=\"gist97509677\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-9t_12-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-9t_12-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-9t_12-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>class<\/span> <span class=pl-v>MyModule<\/span>(<span class=pl-v>LightningModule<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-9t_12-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>def<\/span> <span class=pl-en>__init__<\/span>():<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-9t_12-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>self<\/span>.<span class=pl-s1>encoder<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>RNN<\/span>(...)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-9t_12-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>self<\/span>.<span class=pl-s1>decoder<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>RNN<\/span>(...)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-9t_12-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>def<\/span> <span class=pl-en>forward<\/span>(<span class=pl-s1>x<\/span>):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-9t_12-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c># models won&#39;t be moved after the first forward because <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-9t_12-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c># they are already on the correct GPUs<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-9t_12-py-LC8\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>self<\/span>.<span class=pl-s1>encoder<\/span>.<span class=pl-en>cuda<\/span>(<span class=pl-c1>0<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-9t_12-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>self<\/span>.<span class=pl-s1>decoder<\/span>.<span class=pl-en>cuda<\/span>(<span class=pl-c1>1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-9t_12-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>out<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>self<\/span>.<span class=pl-en>encoder<\/span>(<span class=pl-s1>x<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-9t_12-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1>out<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>self<\/span>.<span class=pl-en>decoder<\/span>(<span class=pl-s1>out<\/span>.<span class=pl-en>cuda<\/span>(<span class=pl-c1>1<\/span>))<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-9t_12-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">        <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-9t_12-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># don&#39;t pass GPUs to trainer<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-9t_12-py-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>model<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>MyModule<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-9t_12-py-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>trainer<\/span> <span class=pl-c1>=<\/span> <span class=pl-v>Trainer<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-9t_12-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-9t_12-py-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>trainer<\/span>.<span class=pl-en>fit<\/span>(<span class=pl-s1>model<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/williamFalcon/e14e6ab22bd5f44985de133142fe4347/raw/a37923fa8df490a47010581c3416a3340a50e446/9t_12.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/williamFalcon/e14e6ab22bd5f44985de133142fe4347#file-9t_12-py\">9t_12.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
