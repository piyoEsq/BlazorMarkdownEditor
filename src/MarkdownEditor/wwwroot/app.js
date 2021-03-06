window.ConvertMarkdownToHtml = (markdownText) => {
    const renderer = new marked.Renderer()
    const doRenderCode = (code, lang) => lang && hljs.getLanguage(lang) ? hljs.highlight(lang, code, true).value : hljs.highlightAuto(code).value
    renderer.code = (code, lang) => `<pre><code class="hljs ${lang || ''}">${doRenderCode(code, lang)}</code></pre>`
    const markedOptions = {
        renderer
    }
    return marked(markdownText, markedOptions);
}