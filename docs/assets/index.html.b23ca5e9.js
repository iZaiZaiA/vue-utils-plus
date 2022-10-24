import{_ as a,j as t,k as n,a5 as e}from"./app.85641af9.js";import"./vendor.addf9944.js";const s={},d=e(`<h1 id="内容验证" tabindex="-1"><a class="header-anchor" href="#内容验证" aria-hidden="true">#</a> 内容验证</h1><p>各种验证的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isValidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="是否存在大小写字母" tabindex="-1"><a class="header-anchor" href="#是否存在大小写字母" aria-hidden="true">#</a> 是否存在大小写字母</h2><p><code>isAlphabets()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容" tabindex="-1"><a class="header-anchor" href="#返回内容" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>存在就返回 <code>true</code>，否则返回 <code>false</code></td></tr></tbody></table><h3 id="code示例" tabindex="-1"><a class="header-anchor" href="#code示例" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isAlphabets <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isAlphabets</span><span class="token punctuation">(</span><span class="token string">&#39;aBc1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证邮箱地址" tabindex="-1"><a class="header-anchor" href="#验证邮箱地址" aria-hidden="true">#</a> 验证邮箱地址</h2><p><code>isEmail()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-1" tabindex="-1"><a class="header-anchor" href="#参数说明-1" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-1" tabindex="-1"><a class="header-anchor" href="#返回内容-1" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>通过就返回 <code>true</code>，否则返回 <code>false</code></td></tr></tbody></table><h3 id="code示例-1" tabindex="-1"><a class="header-anchor" href="#code示例-1" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isEmail <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isEmail</span><span class="token punctuation">(</span><span class="token string">&#39;806606688@qq.com&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证身份证号码" tabindex="-1"><a class="header-anchor" href="#验证身份证号码" aria-hidden="true">#</a> 验证身份证号码</h2><p><code>isIdCard()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-2" tabindex="-1"><a class="header-anchor" href="#参数说明-2" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-2" tabindex="-1"><a class="header-anchor" href="#返回内容-2" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>通过就返回 <code>true</code>，否则返回 <code>false</code></td></tr></tbody></table><h3 id="code示例-2" tabindex="-1"><a class="header-anchor" href="#code示例-2" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isIdCard <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isIdCard</span><span class="token punctuation">(</span><span class="token string">&#39;身份证号码&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小写字母" tabindex="-1"><a class="header-anchor" href="#小写字母" aria-hidden="true">#</a> 小写字母</h2><p><code>isLowerCase()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-3" tabindex="-1"><a class="header-anchor" href="#参数说明-3" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-3" tabindex="-1"><a class="header-anchor" href="#返回内容-3" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>存在就返回 <code>true</code>，否则返回 <code>false</code></td></tr></tbody></table><h3 id="code示例-3" tabindex="-1"><a class="header-anchor" href="#code示例-3" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isLowerCase <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isLowerCase</span><span class="token punctuation">(</span><span class="token string">&#39;aaaa&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证手机号码" tabindex="-1"><a class="header-anchor" href="#验证手机号码" aria-hidden="true">#</a> 验证手机号码</h2><p><code>isMobile()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-4" tabindex="-1"><a class="header-anchor" href="#参数说明-4" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-4" tabindex="-1"><a class="header-anchor" href="#返回内容-4" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-4" tabindex="-1"><a class="header-anchor" href="#code示例-4" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isMobile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token string">&#39;手机号码&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证名称是否正确" tabindex="-1"><a class="header-anchor" href="#验证名称是否正确" aria-hidden="true">#</a> 验证名称是否正确</h2><p><code>isName()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-5" tabindex="-1"><a class="header-anchor" href="#参数说明-5" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-5" tabindex="-1"><a class="header-anchor" href="#返回内容-5" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-5" tabindex="-1"><a class="header-anchor" href="#code示例-5" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isName <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isName</span><span class="token punctuation">(</span><span class="token string">&#39;iZaiZaiA&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证是否为整数" tabindex="-1"><a class="header-anchor" href="#验证是否为整数" aria-hidden="true">#</a> 验证是否为整数</h2><p><code>isNum()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-6" tabindex="-1"><a class="header-anchor" href="#参数说明-6" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-6" tabindex="-1"><a class="header-anchor" href="#返回内容-6" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-6" tabindex="-1"><a class="header-anchor" href="#code示例-6" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isNum <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isNum</span><span class="token punctuation">(</span><span class="token number">10.02</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="验证是否为小数" tabindex="-1"><a class="header-anchor" href="#验证是否为小数" aria-hidden="true">#</a> 验证是否为小数</h1><p><code>isNumord()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-7" tabindex="-1"><a class="header-anchor" href="#参数说明-7" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-7" tabindex="-1"><a class="header-anchor" href="#返回内容-7" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-7" tabindex="-1"><a class="header-anchor" href="#code示例-7" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isNumord <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isNumord</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证电话号码" tabindex="-1"><a class="header-anchor" href="#验证电话号码" aria-hidden="true">#</a> 验证电话号码</h2><p><code>isPhone()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-8" tabindex="-1"><a class="header-anchor" href="#参数说明-8" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-8" tabindex="-1"><a class="header-anchor" href="#返回内容-8" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-8" tabindex="-1"><a class="header-anchor" href="#code示例-8" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isPhone <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token string">&#39;手机号码&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证手机号码是否正确" tabindex="-1"><a class="header-anchor" href="#验证手机号码是否正确" aria-hidden="true">#</a> 验证手机号码是否正确</h2><p><code>isPhoneVal()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-9" tabindex="-1"><a class="header-anchor" href="#参数说明-9" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-9" tabindex="-1"><a class="header-anchor" href="#返回内容-9" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-9" tabindex="-1"><a class="header-anchor" href="#code示例-9" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isPhoneVal <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isPhoneVal</span><span class="token punctuation">(</span><span class="token string">&#39;手机号码&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证大写字母" tabindex="-1"><a class="header-anchor" href="#验证大写字母" aria-hidden="true">#</a> 验证大写字母</h2><p><code>isUpperCase()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-10" tabindex="-1"><a class="header-anchor" href="#参数说明-10" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-10" tabindex="-1"><a class="header-anchor" href="#返回内容-10" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-10" tabindex="-1"><a class="header-anchor" href="#code示例-10" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isUpperCase <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isUpperCase</span><span class="token punctuation">(</span><span class="token string">&#39;BBBBAAA&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证合法url" tabindex="-1"><a class="header-anchor" href="#验证合法url" aria-hidden="true">#</a> 验证合法Url</h2><p><code>isUrlVal()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-11" tabindex="-1"><a class="header-anchor" href="#参数说明-11" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-11" tabindex="-1"><a class="header-anchor" href="#返回内容-11" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-11" tabindex="-1"><a class="header-anchor" href="#code示例-11" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isUrlVal <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isUrlVal</span><span class="token punctuation">(</span><span class="token string">&#39;网址&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断是否为空" tabindex="-1"><a class="header-anchor" href="#判断是否为空" aria-hidden="true">#</a> 判断是否为空</h2><p><code>isValidateNull()</code> <code>支持版本：V0.0.2</code></p><h3 id="参数说明-12" tabindex="-1"><a class="header-anchor" href="#参数说明-12" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>val</td><td>-</td><td>-</td><td>-</td><td>内容</td></tr></tbody></table><h3 id="返回内容-12" tabindex="-1"><a class="header-anchor" href="#返回内容-12" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-12" tabindex="-1"><a class="header-anchor" href="#code示例-12" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> isValidateNull <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">isValidateNull</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="饿了么ui表单验证" tabindex="-1"><a class="header-anchor" href="#饿了么ui表单验证" aria-hidden="true">#</a> 饿了么UI表单验证</h2><p><code>formValidate()</code> <code>支持版本：V0.0.7</code></p><h3 id="参数说明-13" tabindex="-1"><a class="header-anchor" href="#参数说明-13" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>formRef</td><td>-</td><td>-</td><td>-</td><td>ref</td></tr></tbody></table><h3 id="返回内容-13" tabindex="-1"><a class="header-anchor" href="#返回内容-13" aria-hidden="true">#</a> 返回内容</h3><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Boolean</td><td>返回 <code>true</code> 或 <code>false</code></td></tr></tbody></table><h3 id="code示例-13" tabindex="-1"><a class="header-anchor" href="#code示例-13" aria-hidden="true">#</a> code示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> formValidate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//注意，此方法是异步的。</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">formValidate</span><span class="token punctuation">(</span>formRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// true or false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,115),o=[d];function c(i,r){return t(),n("div",null,o)}const p=a(s,[["render",c],["__file","index.html.vue"]]);export{p as default};
