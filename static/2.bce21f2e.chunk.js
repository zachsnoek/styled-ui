webpackJsonp([2],{2185:function(e,n,t){var a=t(0),b=t(94),T=t(460).PageRenderer;T.__esModule&&(T=T.default);var d=b({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(2260)}},componentWillMount:function(){},render:function(){return a.createElement(T,Object.assign({},this.props,{content:this.state.content}))}});d.__catalog_loader__=!0,e.exports=d},2260:function(e,n){e.exports="### Sequenced Tab Navigation\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager>\n\t\t<SequencedTabList>\n\t\t\t<SequencedTab>First Tab</SequencedTab>\n\t\t\t<SequencedTab>Second Tab</SequencedTab>\n\t\t\t<SequencedTab>Third Tab</SequencedTab>\n\t\t\t<SequencedTab>Fourth Tab</SequencedTab>\n\t\t\t<SequencedTab>Fifth Tab, Text is Wrapped</SequencedTab>\n\t\t</SequencedTabList>\n\t</TabManager>\n</TabDemo>\n```\n\n### With Associated Tab Content\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager>\n\t\t<SequencedTabList>\n\t\t\t<SequencedTab>First Tab</SequencedTab>\n\t\t\t<SequencedTab>Second Tab</SequencedTab>\n\t\t\t<SequencedTab>Third Tab</SequencedTab>\n\t\t\t<SequencedTab>Fourth Tab</SequencedTab>\n\t\t\t<SequencedTab>Fifth Tab</SequencedTab>\n\t\t</SequencedTabList>\n\t\t<TabPanels>\n\t\t\t<TabPanel>First Tab!</TabPanel>\n\t\t\t<TabPanel>Second Tab!</TabPanel>\n\t\t\t<TabPanel>Third Tab!</TabPanel>\n\t\t\t<TabPanel>Fourth Tab!</TabPanel>\n\t\t\t<TabPanel>Fifth Tab!</TabPanel>\n\t\t</TabPanels>\n\t</TabManager>\n</TabDemo>\n```\n\n### Using Disabled and Completed Flags\n\nA tab with `completed` set should not be skipped.\n\n```react\nshowSource: true\n---\n<TabDemo>\n\t<TabManager>\n\t\t<SequencedTabList>\n\t\t\t<SequencedTab>First Tab</SequencedTab>\n\t\t\t<SequencedTab>Second Tab</SequencedTab>\n\t\t\t<SequencedTab disabled>Third Tab</SequencedTab>\n\t\t\t<SequencedTab completed>Fourth Tab</SequencedTab>\n\t\t\t<SequencedTab>Fifth Tab</SequencedTab>\n\t\t</SequencedTabList>\n\t</TabManager>\n</TabDemo>\n```\n"}});
//# sourceMappingURL=2.bce21f2e.chunk.js.map