import{_ as a,j as t,k as e,a5 as s}from"./app.85641af9.js";import"./vendor.addf9944.js";const n={},d=s(`<h1 id="本地缓存" tabindex="-1"><a class="header-anchor" href="#本地缓存" aria-hidden="true">#</a> 本地缓存</h1><p>各种本地缓存操作的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utilsStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="保存缓存" tabindex="-1"><a class="header-anchor" href="#保存缓存" aria-hidden="true">#</a> 保存缓存</h2><p><code>setStoreData()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th><th>支持版本</th></tr></thead><tbody><tr><td>key</td><td>-</td><td>-</td><td>-</td><td>键值</td><td>-</td></tr><tr><td>value</td><td>-</td><td>-</td><td>-</td><td>内容</td><td>-</td></tr><tr><td>session</td><td>-</td><td>-</td><td>false</td><td>session存储</td><td>1.0.3</td></tr></tbody></table><p><code>session</code> 为 <code>true</code> 时，将使用 <code>sessionStorage</code>， 否则使用 <code>localStorage</code></p><h3 id="code示例" tabindex="-1"><a class="header-anchor" href="#code示例" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> setStoreData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsStore</span><span class="token punctuation">(</span><span class="token string">&#39;key的前缀&#39;</span><span class="token punctuation">)</span>

<span class="token function">setStoreData</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取缓存" tabindex="-1"><a class="header-anchor" href="#获取缓存" aria-hidden="true">#</a> 获取缓存</h2><p><code>getStoreData()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-1" tabindex="-1"><a class="header-anchor" href="#参数说明-1" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th><th>支持版本</th></tr></thead><tbody><tr><td>key</td><td>-</td><td>-</td><td>-</td><td>键值</td><td>-</td></tr><tr><td>debug</td><td>-</td><td>-</td><td>false</td><td>详情模式</td><td>1.0.3</td></tr><tr><td>session</td><td>-</td><td>-</td><td>false</td><td>session存储</td><td>1.0.3</td></tr></tbody></table><p><code>session</code> 为 <code>true</code> 时，将使用 <code>sessionStorage</code>， 否则使用 <code>localStorage</code></p><p><code>debug</code> 为 <code>true</code> 时，将返回一个对像，里面有 <code>dataType</code>、 <code>content</code> 、<code>session</code>、 <code>datetime</code></p><h3 id="返回内容" tabindex="-1"><a class="header-anchor" href="#返回内容" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关的数据</td></tr></tbody></table><h3 id="code示例-1" tabindex="-1"><a class="header-anchor" href="#code示例-1" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getStoreData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsStore</span><span class="token punctuation">(</span><span class="token string">&#39;key的前缀&#39;</span><span class="token punctuation">)</span>

<span class="token function">getStoreData</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除缓存" tabindex="-1"><a class="header-anchor" href="#删除缓存" aria-hidden="true">#</a> 删除缓存</h2><p><code>delStoreData()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-2" tabindex="-1"><a class="header-anchor" href="#参数说明-2" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th><th>支持版本</th></tr></thead><tbody><tr><td>key</td><td>-</td><td>-</td><td>-</td><td>键值</td><td>-</td></tr><tr><td>session</td><td>-</td><td>-</td><td>false</td><td>session存储</td><td>1.0.3</td></tr></tbody></table><h3 id="code示例-2" tabindex="-1"><a class="header-anchor" href="#code示例-2" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> delStoreData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsStore</span><span class="token punctuation">(</span><span class="token string">&#39;key的前缀&#39;</span><span class="token punctuation">)</span>

<span class="token function">delStoreData</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清空全部缓存" tabindex="-1"><a class="header-anchor" href="#清空全部缓存" aria-hidden="true">#</a> 清空全部缓存</h2><p><code>clearStoreAll()</code> <code>支持版本：V0.0.3</code></p><h3 id="code示例-3" tabindex="-1"><a class="header-anchor" href="#code示例-3" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> clearStoreAll <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">clearStoreAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取全部缓存" tabindex="-1"><a class="header-anchor" href="#获取全部缓存" aria-hidden="true">#</a> 获取全部缓存</h2><p><code>getAllStore()</code> <code>支持版本：V0.0.3</code></p><h3 id="返回内容-1" tabindex="-1"><a class="header-anchor" href="#返回内容-1" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回 相关的数据</td></tr></tbody></table><h3 id="code示例-4" tabindex="-1"><a class="header-anchor" href="#code示例-4" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> getAllStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsStore</span><span class="token punctuation">(</span><span class="token string">&#39;key的前缀&#39;</span><span class="token punctuation">)</span>

<span class="token function">getAllStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),o=[d];function c(i,r){return t(),e("div",null,o)}const h=a(n,[["render",c],["__file","index.html.vue"]]);export{h as default};
