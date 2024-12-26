
const KeyDown = (refElement:any) => (event:any) => {
  if (event.keys === 'Enter') {
    refElement.curreny.focus()
  }
};

export default KeyDown;
