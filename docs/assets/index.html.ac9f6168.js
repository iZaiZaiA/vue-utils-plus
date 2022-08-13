import{_ as n,o as s,c as d,b as a,a as c,d as t,e as o,r}from"./app.f36bdf16.js";const i={},p=a("h1",{id:"\u65E5\u671F\u65F6\u95F4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u65E5\u671F\u65F6\u95F4","aria-hidden":"true"},"#"),t(" \u65E5\u671F\u65F6\u95F4")],-1),l=t("\u5404\u79CD\u65E5\u671F\u65F6\u95F4\u64CD\u4F5C\u7684\u65B9\u6CD5\uFF0C\u66F4\u591A js \u539F\u751F\u65B9\u6CD5\uFF0C\u67E5\u9605\uFF1A"),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date",target:"_blank",rel:"noopener noreferrer"},u=t("Date"),b=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utilsDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53D6\u5F53\u524D\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5F53\u524D\u65F6\u95F4" aria-hidden="true">#</a> \u53D6\u5F53\u524D\u65F6\u95F4</h2><p><code>getDateTime()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u8FD4\u56DE\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>dateTime</td><td>\u65E5\u671F\u65F6\u95F4</td></tr><tr><td>date</td><td>\u65E5\u671F</td></tr><tr><td>time</td><td>\u65F6\u95F4</td></tr><tr><td>obj</td><td>\u5355\u72EC</td></tr></tbody></table><h3 id="code\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getDateTime <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">getDateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F53\u524D\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u65F6\u95F4\u6233" aria-hidden="true">#</a> \u5F53\u524D\u65F6\u95F4\u6233</h2><p><code>dateNow()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.3</code></p><h3 id="\u8FD4\u56DE\u5185\u5BB9-1" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-1" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u53C2\u6570\u5B57\u6BB5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u5F53\u524D\u65F6\u95F4\u6233</td></tr></tbody></table><h3 id="code\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-1" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> dateNow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">dateNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316</h2><p><code>dateFormat()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.2</code></p><h3 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date</td><td>-</td><td>-</td><td>-</td><td>\u65E5\u671F\u5BF9\u8C61</td></tr><tr><td>format</td><td>-</td><td>-</td><td>yyyy-MM-dd hh:mm:ss</td><td>\u683C\u5F0F</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-2" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-2" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u53C2\u6570\u5B57\u6BB5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>-</td><td>\u683C\u5F0F\u5316\u540E\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="code\u793A\u4F8B-2" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-2" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> dateFormat <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;yyyy-MM-dd&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2020-01-01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BA1\u7B97\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u65F6\u95F4" aria-hidden="true">#</a> \u8BA1\u7B97\u65F6\u95F4</h2><p><code>calcDate()</code> <code>\u652F\u6301\u7248\u672C\uFF1AV0.0.2</code></p><h3 id="\u53C2\u6570\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E-1" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>date1</td><td>-</td><td>-</td><td>-</td><td>\u65E5\u671F\u65F6\u95F41</td></tr><tr><td>date2</td><td>-</td><td>-</td><td>-</td><td>\u65E5\u671F\u65F6\u95F42</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u5185\u5BB9-3" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u5185\u5BB9-3" aria-hidden="true">#</a> \u8FD4\u56DE\u5185\u5BB9</h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>leave1</td><td>\u8BA1\u7B97\u5929\u6570\u540E\u5269\u4F59\u7684\u6BEB\u79D2\u6570</td></tr><tr><td>leave2</td><td>\u8BA1\u7B97\u5C0F\u65F6\u6570\u540E\u5269\u4F59\u7684\u6BEB\u79D2\u6570</td></tr><tr><td>leave3</td><td>\u8BA1\u7B97\u5206\u949F\u6570\u540E\u5269\u4F59\u7684\u6BEB\u79D2\u6570</td></tr><tr><td>days</td><td>\u5269\u4F59\u5929\u6570</td></tr><tr><td>hours</td><td>\u5269\u4F59\u5C0F\u65F6</td></tr><tr><td>minutes</td><td>\u5269\u4F59\u5206\u949F</td></tr><tr><td>seconds</td><td>\u5269\u4F59\u79D2</td></tr></tbody></table><h3 id="code\u793A\u4F8B-3" tabindex="-1"><a class="header-anchor" href="#code\u793A\u4F8B-3" aria-hidden="true">#</a> code\u793A\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> calcDate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">calcDate</span><span class="token punctuation">(</span><span class="token string">&#39;2022-07-29 10:22:14&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2022-08-14 23:59:59&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function k(v,m){const e=r("ExternalLinkIcon");return s(),d("div",null,[p,a("p",null,[l,a("a",h,[u,c(e)])]),b])}var g=n(i,[["render",k],["__file","index.html.vue"]]);export{g as default};
