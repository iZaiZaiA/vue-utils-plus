import{_ as t,r as i,o,c as p,b as a,d as s,a as e,e as c}from"./app.2172ecdc.js";const l="/images/1.jpeg",r="/images/2.jpeg",d="/images/3.jpeg",u="/images/4.jpeg",h="/images/5.jpeg",v="/images/6.jpeg",m={},k=c(`<h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南" aria-hidden="true">#</a> 指南</h1><h2 id="这是什么" tabindex="-1"><a class="header-anchor" href="#这是什么" aria-hidden="true">#</a> 这是什么？</h2><p>基于vue3的 非常简单的常用方法函数库，我自用的，如果你是大佬，可以关闭了。</p><h3 id="不是-typescript" tabindex="-1"><a class="header-anchor" href="#不是-typescript" aria-hidden="true">#</a> 不是 TypeScript</h3><p>因为我不会 TypeScript，也不想学 TS，所以，它不是用 TS 开发的。JavaScript 万岁！！</p><h3 id="不支持-vue2" tabindex="-1"><a class="header-anchor" href="#不支持-vue2" aria-hidden="true">#</a> 不支持 Vue2</h3><p>我也不知道支不支持Vue2，但有些方法函数，肯定不支持，比如，跟渲染相关的，因为采用的是Vue3的写法</p><h3 id="没有-cdn" tabindex="-1"><a class="header-anchor" href="#没有-cdn" aria-hidden="true">#</a> 没有 CDN</h3><p>没有CDN，免费的，懒得弄，收费的，没钱弄，将就玩一下就行了，咱又不是知名大库</p><h3 id="没有-性能" tabindex="-1"><a class="header-anchor" href="#没有-性能" aria-hidden="true">#</a> 没有 性能</h3><p>性能？什么性能？按需加载？什么按需加载？内存溢出？什么内存溢出？我不懂~~</p><h3 id="别讲什么什么现成库" tabindex="-1"><a class="header-anchor" href="#别讲什么什么现成库" aria-hidden="true">#</a> 别讲什么什么现成库</h3><p>那些现成的库，非常好，但并不影响，我要自己做一个，我自己的常用方法函数库。</p><h2 id="立即开始" tabindex="-1"><a class="header-anchor" href="#立即开始" aria-hidden="true">#</a> 立即开始</h2><p>简单说说，怎么用这个东西</p><h3 id="第一步-安装" tabindex="-1"><a class="header-anchor" href="#第一步-安装" aria-hidden="true">#</a> 第一步: 安装</h3><p>在项目根目录，打开终端，复制粘贴，回车，一气呵成。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-utils-plus <span class="token parameter variable">-D</span>

<span class="token comment"># or</span>

<span class="token function">npm</span> i vue-utils-plus <span class="token parameter variable">-D</span> save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步-引用" tabindex="-1"><a class="header-anchor" href="#第二步-引用" aria-hidden="true">#</a> 第二步: 引用</h3><p>在需要使用的地方，如 <code>App.vue</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> isObjNull <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isObjNull</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你觉得这种方式，比较麻烦，你也可以直接用函数，不过，这种方式，在使用 <code>本地缓存</code> 模块时，暂时无法设置 <code>key前缀</code>。</p><p><code>此模式，只支持 &gt;= V1.0.0 的版本</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isObjNull <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-utils-plus&quot;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isObjNull</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是这么简单。</p><h2 id="感谢赞助商" tabindex="-1"><a class="header-anchor" href="#感谢赞助商" aria-hidden="true">#</a> 感谢赞助商</h2><p>感谢 享脆风味坚果铺 赞助</p>`,27),b={href:"https://shop182729045.taobao.com/",target:"_blank",rel:"noopener noreferrer"},_=a("th",null,"-",-1),g={href:"https://shop182729045.taobao.com/",target:"_blank",rel:"noopener noreferrer"},f=a("tbody",null,[a("tr",null,[a("td",null,[a("img",{src:l,alt:"坚果椰奶味"})]),a("td",null,[a("img",{src:r,alt:"坚果海苔味"})]),a("td",null,[a("img",{src:d,alt:"坚果卤香甜辣味"})])]),a("tr",null,[a("td",null,[a("img",{src:u,alt:"坚果提拉米苏味"})]),a("td",null,[a("img",{src:h,alt:"坚果芥末风味"})]),a("td",null,[a("img",{src:v,alt:"坚果香辣火鸡味"})])])],-1);function x(j,y){const n=i("ExternalLinkIcon");return o(),p("div",null,[k,a("table",null,[a("thead",null,[a("tr",null,[a("th",null,[a("a",b,[s("享脆风味坚果铺"),e(n)])]),_,a("th",null,[a("a",g,[s("查看店铺"),e(n)])])])]),f])])}const V=t(m,[["render",x],["__file","index.html.vue"]]);export{V as default};
