function customRender(createElement,rootContainer) {
    const domElement=document.createElement(createElement.type);
    domElement.innerHTML=createElement.content;
    domElement.setAttribute('href',createElement.props.href);
    domElement.setAttribute('target',createElement.props.target);
    rootContainer.appendChild(domElement);
}
const createElement={
    type:'a',
    props:{
        href:'https://www.linkedin.com/in/mai-aur-pradiep-kumar/',
        target:'_blank'
    },
    content:"Click Here!"
}
const rootContainer=document.getElementById('root');

customRender(createElement,rootContainer)

