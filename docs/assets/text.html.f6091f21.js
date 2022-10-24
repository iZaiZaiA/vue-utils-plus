import{_ as s,o as n,c as a,e}from"./app.8afecd54.js";const t={},p=e(`<h1 id="\u7CFB\u7EDF\u5185\u7F6E\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u5185\u7F6E\u8BB0\u5F55" aria-hidden="true">#</a> \u7CFB\u7EDF\u5185\u7F6E\u8BB0\u5F55</h1><p>\u4E00\u4E9B js \u5185\u7F6E\u7684 \u6570\u7EC4\u64CD\u4F5C\u7684\u65B9\u6CD5\u51FD\u6570\u8BB0\u5F55\u6587\u7AE0\u3002</p><h2 id="\u662F\u5426\u5305\u542B" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u5305\u542B" aria-hidden="true">#</a> \u662F\u5426\u5305\u542B</h2><p><code>includes() </code> \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u627E\u5230\u4E86\u53C2\u6570\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u662F\u5426\u5728\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u5728\u5934\u90E8" aria-hidden="true">#</a> \u662F\u5426\u5728\u5934\u90E8</h2><p><code>startsWith()</code> \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5934\u90E8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u662F\u5426\u5728\u5C3E\u90E8" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u5728\u5C3E\u90E8" aria-hidden="true">#</a> \u662F\u5426\u5728\u5C3E\u90E8</h2><p><code>endsWith()</code> \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u53C2\u6570\u5B57\u7B26\u4E32\u662F\u5426\u5728\u539F\u5B57\u7B26\u4E32\u7684\u5C3E\u90E8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32\u91CD\u590D" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u91CD\u590D" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u91CD\u590D</h2><p><code>repeat()</code> \u8FD4\u56DE\u4E00\u4E2A\u65B0\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5C06\u539F\u5B57\u7B26\u4E32\u91CD\u590D <code>n</code> \u6B21\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str  <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hellohello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5934\u90E8\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u5934\u90E8\u8865\u5168" aria-hidden="true">#</a> \u5934\u90E8\u8865\u5168</h2><p><code>padStart() </code> \u5B57\u7B26\u4E32\u4E0D\u591F\u6307\u5B9A\u957F\u5EA6\uFF0C\u5C06\u5934\u90E8\u8865\u5168</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str  <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
str<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;vue-hello&#39;</span>

<span class="token comment">//\u5904\u7406\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u65F6\uFF0C\u6BD4\u8F83\u597D\u7528</span>
<span class="token keyword">let</span> str  <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span>
str<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;02&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5C3E\u90E8\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u5C3E\u90E8\u8865\u5168" aria-hidden="true">#</a> \u5C3E\u90E8\u8865\u5168</h2><p><code>padEnd()</code> \u5B57\u7B26\u4E32\u4E0D\u591F\u6307\u5B9A\u957F\u5EA6\uFF0C\u5C06\u5C3E\u90E8\u8865\u5168\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> str  <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span>
str<span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;20&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D88\u9664\u5934\u90E8\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u6D88\u9664\u5934\u90E8\u7A7A\u683C" aria-hidden="true">#</a> \u6D88\u9664\u5934\u90E8\u7A7A\u683C</h2><p><code>trimStart()</code> \u6D88\u9664\u5B57\u7B26\u4E32\u5934\u90E8\u7684\u7A7A\u683C(\u8FD4\u56DE\u7684\u90FD\u662F\u65B0\u5B57\u7B26\u4E32\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u59CB\u5B57\u7B26\u4E32)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;  hello&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D88\u9664\u5C3E\u90E8\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u6D88\u9664\u5C3E\u90E8\u7A7A\u683C" aria-hidden="true">#</a> \u6D88\u9664\u5C3E\u90E8\u7A7A\u683C</h2><p><code>trimEnd()</code> \u6D88\u9664\u5C3E\u90E8\u7684\u7A7A\u683C (\u8FD4\u56DE\u7684\u90FD\u662F\u65B0\u5B57\u7B26\u4E32\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u59CB\u5B57\u7B26\u4E32)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello  &#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66FF\u6362\u6240\u6709\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u6240\u6709\u5339\u914D" aria-hidden="true">#</a> \u66FF\u6362\u6240\u6709\u5339\u914D</h2><p><code>matchAll()</code> \u8FD4\u56DE\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u5728\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u6240\u6709\u5339\u914D <code>replaceAll()</code> \u53EF\u4EE5\u4E00\u6B21\u6027\u66FF\u6362\u6240\u6709\u5339\u914D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;aa__cc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h2><p><code>at()</code> \u63A5\u53D7\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u53C2\u6570\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF0C\u652F\u6301\u8D1F\u7D22\u5F15</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// &quot;e&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D6\u8F93\u5165\u6846\u7684\u5149\u6807\u6240\u5728\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53D6\u8F93\u5165\u6846\u7684\u5149\u6807\u6240\u5728\u4F4D\u7F6E" aria-hidden="true">#</a> \u53D6\u8F93\u5165\u6846\u7684\u5149\u6807\u6240\u5728\u4F4D\u7F6E</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> specialDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u6846ID&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> startPos <span class="token operator">=</span> specialDom<span class="token operator">?.</span>selectionStart <span class="token operator">||</span> <span class="token number">0</span>
<span class="token keyword">const</span> endPos <span class="token operator">=</span> specialDom<span class="token operator">?.</span>selectionEnd <span class="token operator">||</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue\u65B9\u5F0F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>specialInputBlur<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//\u5931\u53BB\u7126\u70B9\u4E8B\u4EF6\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u7528\u9F20\u6807\u53F3\u952E\u4E8B\u4EF6\u7B49\u83B7\u53D6</span>
    <span class="token keyword">const</span> <span class="token function-variable function">specialInputBlur</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> startPos <span class="token operator">=</span> e<span class="token operator">?.</span>target<span class="token operator">?.</span>selectionStart <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">const</span> endPos <span class="token operator">=</span> e<span class="token operator">?.</span>target<span class="token operator">?.</span>selectionEnd <span class="token operator">||</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),c=[p];function o(l,i){return n(),a("div",null,c)}const d=s(t,[["render",o],["__file","text.html.vue"]]);export{d as default};
