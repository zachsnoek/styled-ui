webpackJsonp([53],{2149:function(t,n,e){var o=e(0),r=e(94),a=e(460).PageRenderer;a.__esModule&&(a=a.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(2224)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},2224:function(t,n){t.exports='## Component Variations\n\nIn general, it is recommended to provide some other alternate UI on mobile .\n\n### Basic\n\n```react\nshowSource: true\nstate: {\n\tfileNames: [],\n}\n---\n<div>\n\t<DropZone\n\t\tonDrop={dropEvent => {\n\t\t\tdropEvent.preventDefault();\n\t\t\tdropEvent.stopPropagation();\n\n\t\t\tconst files = dropEvent.dataTransfer.files;\n\t\t\tconst fileNames = [];\n\t\t\tfor (const file of files) {\n\t\t\t\tfileNames.push(file.name);\n\t\t\t}\n\n\t\t\tsetState(prevState => ({\n\t\t\t\tfileNames: [...prevState.fileNames, ...fileNames],\n\t\t\t}));\n\t\t}}\n\t>\n\t\tDrop files\n\t</DropZone>\n\t<DroppedFiles>\n\t\t{state.fileNames.map((name, i) => <div key={`${name}_{i}`}>Dropped file: {name}</div>)}\n\t</DroppedFiles>\n</div>\n```\n\n### With more complex children\n\n```react\nshowSource: true\nstate: {\n\tfileNames: [],\n}\n---\n<div>\n\t<DropZone\n\t\tonDrop={dropEvent => {\n\t\t\tdropEvent.preventDefault();\n\t\t\tdropEvent.stopPropagation();\n\n\t\t\tconst files = dropEvent.dataTransfer.files;\n\t\t\tconst fileNames = [];\n\t\t\tfor (const file of files) {\n\t\t\t\tfileNames.push(file.name);\n\t\t\t}\n\n\t\t\tsetState(prevState => ({\n\t\t\t\tfileNames: [...prevState.fileNames, ...fileNames],\n\t\t\t}));\n\t\t}}\n\t>\n\t\t<IconsContainer>\n\t\t\t<svg\n\t\t\t\tstroke="currentColor"\n\t\t\t\tfill="currentColor"\n\t\t\t\tstrokeWidth="0"\n\t\t\t\tviewBox="0 0 512 512"\n\t\t\t\theight="28"\n\t\t\t\twidth="28"\n\t\t\t>\n\t\t\t\t<path d="M470.4 1.5l-304 96C153.1 101.7 144 114 144 128v264.6c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V220.5l272-85.9v194c-14.1-5.4-30.5-8.6-48-8.6-53 0-96 28.7-96 64s43 64 96 64 96-28.7 96-64V32c0-21.7-21.1-37-41.6-30.5z" />\n\t\t\t</svg>\n\t\t\t<svg\n\t\t\t\tstroke="currentColor"\n\t\t\t\tfill="currentColor"\n\t\t\t\tstrokeWidth="0"\n\t\t\t\tviewBox="0 0 384 512"\n\t\t\t\theight="28"\n\t\t\t\twidth="28"\n\t\t\t>\n\t\t\t\t<path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />\n\t\t\t</svg>\n\t\t</IconsContainer>\n\t\t<DropZoneMessage>Drag & drop to upload chord charts, tracks, etc.</DropZoneMessage>\n\t</DropZone>\n\t<DroppedFiles>\n\t\t{state.fileNames.map((name, i) => <div key={`${name}_{i}`}>Dropped file: {name}</div>)}\n\t</DroppedFiles>\n</div>\n```\n'}});
//# sourceMappingURL=53.809e1eaf.chunk.js.map