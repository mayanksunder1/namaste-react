const heading =React.createElement('div',
        {id:'parent'},
        [React.createElement('div',
        {id:'child'},
        [React.createElement('h1',
        {id:'grand child'},"hola"),React.createElement('h2',
        {id:'grandchild'},"hola")]),React.createElement('div',
        {id:'child'},
        [React.createElement('h1',
        {id:'grand child'},"hola"),React.createElement('h2',
        {id:'grandchild'},"hola")])])
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)