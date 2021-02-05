const fs = require('fs');

const minifyHTML = (text) => {
  return text.replace(/>\s+</, "><").replace(/\s{2,}/, " ")
}

const minifyCSS = (text) => {
  return text.replace(/;\s+/, ";").replace(/\{\s+/, "{").replace(/\}\s+/, "}");
}

// unfinished
const preprocessTemplates = (htmlName) => {
  fs.readFile(`src/${htmlName}.html`, (err, htmlText) => {
    const scriptMatches = htmlText.matchAll(/<script src="([a-zA-Z\-_0-9\.]+\.js)"><\/script>/g)

    for (let match of scriptMatches) {
      fs.readFile(`src/${match[1]}`, (err, jsText) => {
        console.log(jsText);
      })
    }
  })

  return htmlText;
}

/**

Really the only thing that these templates do is stop html changes from breaking my .children[n].children[k]... shit

Here's how templates will work

I have all the template ids the same as the class names. could automate that, but probs not good idea

write html templates with $....$ in place of dom nodes.
  <template id="block">
    <div class="block">
      <div class="block__body" contenteditable="true" tabindex="-1">
        $body$
      </div>
      <div class="block__children">
        $children$
      </div>
    </div>
  </template>

  then in javascript write TEMPLATE_NEW_[template id]()
  const block = TEMPLATE_NEW_BLOCK(parent)
  block.template_body.appendChild(domNode1)
  block.template_children.appendChild(domNode2)
  block.template_children.appendChild(domNode3)

  that compiles into

  *top of file*
  const template_node_block = document.getElementById('block').content.firstElementChild;

  *inline*
  const block = template_node_block.cloneNode(true)
  parent.appendChild(block);
  block.children[0].appendChild(domNode1)
  block.children[1].appendChild(domNode2)
  block.children[1].appendChild(domNode3)

  or

  const block = template_new_block(parent=parent, body=domNode1, children=[domNode2])
 */