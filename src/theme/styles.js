const styles = {
  global: (props) => ({
    '*': {
      outline: '1px solid transparent',
    },
    'html, body': {
      fontSize: 'md',
      fontFamily: "'Google Sans',Roboto,Arial,sans-serif",
      color: '#202124',
      height: '100%',
    },
    '#root': {
      height: '100%',
    },
    '[contentEditable=true]:empty:before': {
      content: 'attr(area-label)',
    },
    '[contentEditable=true]': {
      cursor: 'text',
    },
  }),
};

export default styles;
