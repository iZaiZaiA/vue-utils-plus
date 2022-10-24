import{_ as a,j as t,k as n,a5 as s}from"./app.85641af9.js";import"./vendor.addf9944.js";const e={},d=s(`<h1 id="数据转换" tabindex="-1"><a class="header-anchor" href="#数据转换" aria-hidden="true">#</a> 数据转换</h1><p>各种数据转换的操作方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> utilsTo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="强转int型" tabindex="-1"><a class="header-anchor" href="#强转int型" aria-hidden="true">#</a> 强转int型</h2><p><code>toInt()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容" tabindex="-1"><a class="header-anchor" href="#返回内容" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关数据</td></tr></tbody></table><h3 id="code示例" tabindex="-1"><a class="header-anchor" href="#code示例" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toInt <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">toInt</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json强转为form类型" tabindex="-1"><a class="header-anchor" href="#json强转为form类型" aria-hidden="true">#</a> Json强转为Form类型</h2><p><code>toFormData()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-1" tabindex="-1"><a class="header-anchor" href="#参数说明-1" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>obj</td><td>-</td><td>-</td><td>-</td><td>obj对象</td></tr></tbody></table><h3 id="返回内容-1" tabindex="-1"><a class="header-anchor" href="#返回内容-1" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关数据</td></tr></tbody></table><h3 id="code示例-1" tabindex="-1"><a class="header-anchor" href="#code示例-1" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toFormData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">}</span>

<span class="token function">toFormData</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据逗号联合" tabindex="-1"><a class="header-anchor" href="#根据逗号联合" aria-hidden="true">#</a> 根据逗号联合</h2><p><code>toJoin()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-2" tabindex="-1"><a class="header-anchor" href="#参数说明-2" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>arr</td><td>-</td><td>-</td><td>-</td><td>数组</td></tr></tbody></table><h3 id="返回内容-2" tabindex="-1"><a class="header-anchor" href="#返回内容-2" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关数据</td></tr></tbody></table><h3 id="code示例-2" tabindex="-1"><a class="header-anchor" href="#code示例-2" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toJoin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token function">toJoin</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 1,2,3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据逗号分隔" tabindex="-1"><a class="header-anchor" href="#根据逗号分隔" aria-hidden="true">#</a> 根据逗号分隔</h2><p><code>toSplit()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-3" tabindex="-1"><a class="header-anchor" href="#参数说明-3" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-3" tabindex="-1"><a class="header-anchor" href="#返回内容-3" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关数据</td></tr></tbody></table><h3 id="code示例-3" tabindex="-1"><a class="header-anchor" href="#code示例-3" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toSplit <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">toSplit</span><span class="token punctuation">(</span><span class="token string">&#39;1,2,3,4&#39;</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表单转url拼接" tabindex="-1"><a class="header-anchor" href="#表单转url拼接" aria-hidden="true">#</a> 表单转URL拼接</h2><p><code>toSerialize()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-4" tabindex="-1"><a class="header-anchor" href="#参数说明-4" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>-</td><td>-</td><td>-</td><td>obj数据</td></tr></tbody></table><h3 id="返回内容-4" tabindex="-1"><a class="header-anchor" href="#返回内容-4" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回相关数据</td></tr></tbody></table><h3 id="code示例-4" tabindex="-1"><a class="header-anchor" href="#code示例-4" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toSerialize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">}</span>

<span class="token function">toSerialize</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// id=1&amp;name=vue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色混合" tabindex="-1"><a class="header-anchor" href="#颜色混合" aria-hidden="true">#</a> 颜色混合</h2><p><code>toColor()</code> <code>支持版本：V0.0.3</code></p><h3 id="参数说明-5" tabindex="-1"><a class="header-anchor" href="#参数说明-5" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>c1</td><td>-</td><td>-</td><td>-</td><td>底色颜色值</td></tr><tr><td>c2</td><td>-</td><td>-</td><td>-</td><td>主颜色值</td></tr><tr><td>ratio</td><td>-</td><td>-</td><td>-</td><td>混合度，0.1 - 0.9</td></tr></tbody></table><h3 id="返回内容-5" tabindex="-1"><a class="header-anchor" href="#返回内容-5" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>返回混合后的颜色值</td></tr></tbody></table><h3 id="code示例-5" tabindex="-1"><a class="header-anchor" href="#code示例-5" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toColor <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">toColor</span><span class="token punctuation">(</span><span class="token string">&#39;#FFFFFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FE0000&#39;</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串转数组或json" tabindex="-1"><a class="header-anchor" href="#字符串转数组或json" aria-hidden="true">#</a> 字符串转数组或JSON</h2><p><code>toParse()</code> <code>支持版本：V1.0.1</code></p><p>其实就是 <code>JSON.parse</code>，只是外面包了一层 <code>try</code>，防止不规范的内容转换失败报错，导致后续线程终止。</p><h3 id="参数说明-6" tabindex="-1"><a class="header-anchor" href="#参数说明-6" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>待转换的内容</td></tr></tbody></table><h3 id="返回内容-6" tabindex="-1"><a class="header-anchor" href="#返回内容-6" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>如果能转换，就返回转换后的数据，否则返回false</td></tr></tbody></table><h3 id="code示例-6" tabindex="-1"><a class="header-anchor" href="#code示例-6" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> toParse <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token string">&quot;[abx1-2, abcsd-35]&quot;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">toParse</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理栅栏间隔" tabindex="-1"><a class="header-anchor" href="#处理栅栏间隔" aria-hidden="true">#</a> 处理栅栏间隔</h2><p><code>setRowSpace()</code> <code>支持版本：V1.0.2</code></p><h3 id="参数说明-7" tabindex="-1"><a class="header-anchor" href="#参数说明-7" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>spacing</td><td>Number</td><td>-</td><td>-</td><td>间隔值</td></tr><tr><td>type</td><td>String</td><td><code>margin</code> <code>padding</code></td><td><code>margin</code></td><td>间距类型</td></tr></tbody></table><h3 id="返回内容-7" tabindex="-1"><a class="header-anchor" href="#返回内容-7" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>style样式</td></tr></tbody></table><h3 id="code示例-7" tabindex="-1"><a class="header-anchor" href="#code示例-7" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> setRowSpace <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">utilsTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">setRowSpace</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;margin&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// margin: -10px</span>
<span class="token function">setRowSpace</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;padding&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// padding: 10px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68),o=[d];function c(r,p){return t(),n("div",null,o)}const h=a(e,[["render",c],["__file","index.html.vue"]]);export{h as default};