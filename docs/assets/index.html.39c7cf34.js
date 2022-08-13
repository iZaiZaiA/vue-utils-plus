import{_ as a,o as t,c as n,e}from"./app.f36bdf16.js";const s={},d=e(`<h1 id="\u968F\u673A\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u968F\u673A\u5B57\u7B26" aria-hidden="true">#</a> \u968F\u673A\u5B57\u7B26</h1><p>\u5404\u79CD\u968F\u673A\u5B57\u7B26\u64CD\u4F5C\u7684\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utilsRandom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u751F\u6210uuid" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210uuid" aria-hidden="true">#</a> \u751F\u6210UUID</h2><p><code>UUID()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><p>\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5E76\u4E14\u586B\u5145\u6570\u636E\u3002</p><h3 id="\u8FD4\u56DE\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><p>\u8FD4\u56DE\u7C7B\u4F3C\u8FD9\u79CD\uFF1A<code>79b084e1-8e33-49f2-a888-28a32f0860db</code> \u7684\u5B57\u7B26\u4E32</p><h3 id="code\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">UUID</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token constant">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//79b084e1-8e33-49f2-a888-28a32f0860db</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniqueid" tabindex="-1"><a class="header-anchor" href="#uniqueid" aria-hidden="true">#</a> UniqueID</h2><p><code>UniqueID()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h3><p><code>Math.random().toString(36).slice(8)</code></p><h3 id="\u8FD4\u56DE\u5185\u5BB9-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-1" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-1" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> UniqueID <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">UniqueID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32</h2><p><code>getRandom()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-2" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-2" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getRandom <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//&quot;8fq8q8q8&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A\u6570\u5B57" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A\u6570\u5B57" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A\u6570\u5B57</h2><p><code>getNumber()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-1" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-3" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-3" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getNumber <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A-\u5C0F\u5199\u5B57\u6BCD-\u5927\u5199\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A-\u5C0F\u5199\u5B57\u6BCD-\u5927\u5199\u5B57\u6BCD" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A \u5C0F\u5199\u5B57\u6BCD + \u5927\u5199\u5B57\u6BCD</h2><p><code>getAlphabets()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-2" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-4" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-4" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-4" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-4" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getAlphabets <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getAlphabets</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A-\u5C0F\u5199\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A-\u5C0F\u5199\u5B57\u6BCD" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A \u5C0F\u5199\u5B57\u6BCD</h2><p><code>getLowerCase()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-3" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-3" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-5" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-5" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-5" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-5" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getLowerCase <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A-\u6570\u5B57-\u5C0F\u5199\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A-\u6570\u5B57-\u5C0F\u5199\u5B57\u6BCD" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A \u6570\u5B57+ \u5C0F\u5199\u5B57\u6BCD</h2><p><code>getNumberLower()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-4" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-4" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-6" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-6" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-6" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-6" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getNumberLower <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getNumberLower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u751F\u6210\u968F\u673A-\u6570\u5B57-\u5927\u5199\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A-\u6570\u5B57-\u5927\u5199\u5B57\u6BCD" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A \u6570\u5B57 + \u5927\u5199\u5B57\u6BCD</h1><p><code>getNumberUpper()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-5" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>num</td><td>-</td><td>-</td><td>8</td><td>\u957F\u5EA6</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-7" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-7" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-7" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-7" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getNumberUpper <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getNumberUpper</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u6210\u968F\u673A-\u8303\u56F4\u968F\u673A\u6570" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u968F\u673A-\u8303\u56F4\u968F\u673A\u6570" aria-hidden="true">#</a> \u751F\u6210\u968F\u673A \u8303\u56F4\u968F\u673A\u6570</h2><p><code>getRandomFrom()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-6" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-6" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><p>\u751F\u6210\u8D77\u59CB\u6570\u5B57\u548C\u7ED3\u675F\u6570\u5B57\u4E4B\u95F4\u7684\u4E00\u4E2A\u968F\u673A\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>upper</td><td>-</td><td>-</td><td>-</td><td>\u8D77\u59CB\u6570\u5B57</td></tr><tr><td>lower</td><td>-</td><td>-</td><td>-</td><td>\u7ED3\u675F\u6570\u5B57</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-8" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-8" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u8FD4\u56DE\u751F\u6210\u540E\u7684\u6570\u636E</td></tr></tbody></table><h3 id="code\u793A\u4F8B-8" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-8" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getRandomFrom <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsRandom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getRandomFrom</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),c=[d];function i(o,r){return t(),n("div",null,c)}var p=a(s,[["render",i],["__file","index.html.vue"]]);export{p as default};
