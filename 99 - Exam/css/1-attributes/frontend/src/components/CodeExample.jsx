import React from "react";

const CodeExample = () => {
  return (
    <code className="codeExample">
      <div className="myCode">
        &lt;ul&gt;
        <br />
        <div className="myCode__li">
          &lt;li&gt;&lt;a href="#internal"&gt;Internal link&lt;/a&gt;&lt;/li&gt;
          <br />
          &lt;li&gt;&lt;a href="http://example.com"&gt;Example
          link&lt;/a&gt;&lt;/li&gt;
          <br />
          &lt;li&gt;&lt;a href="#InSensitive"&gt;Insensitive internal
          link&lt;/a&gt;&lt;/li&gt;
          <br />
          &lt;li&gt;&lt;a href="http://example.org"&gt;Example org
          link&lt;/a&gt;&lt;/li&gt;
          <br />
          &lt;li&gt;&lt;a href="https://example.org"&gt;Example https org
          link&lt;/a&gt;&lt;/li&gt;
          <br />
        </div>
        &lt;/ul&gt;
      </div>

      <div className="myCode">
        &lt;div &gt;Hello World!&lt;/div&gt;
        <br />
        &lt;div lang="en-us en-gb en-au en-nz"&gt;Hello World!&lt;/div&gt;
        <br />
        &lt;div lang="pt"&gt;Olá Mundo!&lt;/div&gt;
        <br />
        &lt;div lang="zh-CN"&gt;世界您好！&lt;/div&gt;
        <br />
        &lt;div lang="zh-TW"&gt;世界您好！&lt;/div&gt;
        <br />
        &lt;div data-lang="zh-TW"&gt;世界您好！&lt;/div&gt;
        <br />
      </div>

      <div className="myCode">
        &lt;ol type="A"&gt;
        <br />
        <div className="myCode__li">
          &lt;li&gt;Red background for case-insensitive matching (default for
          the type selector)&lt;/li&gt;
        </div>
        &lt;/ol&gt;
        <br />
        &lt;ol type="b"&gt;
        <br />
        <div className="myCode__li">
          &lt;li&gt;Lime background if `s` modifier is supported (case-sensitive
          match)&lt;/li&gt;
        </div>
        &lt;/ol&gt;
        <br />
        &lt;ol type="B"&gt;
        <br />
        <div className="myCode__li">
          &lt;li&gt;Grey background if `s` modifier is supported (case-sensitive
          match)&lt;/li&gt;
        </div>
        &lt;/ol&gt;
        <br />
        &lt;ol type="C"&gt;
        <br />
        <div className="myCode__li">
          &lt;li&gt;Green background if `i` modifier is supported
          (case-insensitive match)&lt;/li&gt;
        </div>
        &lt;/ol&gt;
        <br />
      </div>
    </code>
  );
};

export default CodeExample;
