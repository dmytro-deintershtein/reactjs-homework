import React, {useEffect} from 'react';
import Item from "./Item";

const Catalog = (props) => {
  // TODO: think how to count items without re-render
  useEffect(() => {
    let target = document.getElementById('catalog');

    const config = {
      childList: true,
      subtree: true
    };

    const callback = function(mutationsList, observer) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          let number = target.childElementCount;
          document.getElementById('items-found').innerText = number + ' items found';
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(target, config);
  })

  const sort = (prop, array) => {
    array.sort((a, b) => {
      if(a[prop] < b[prop]) { return -1; }
      if(a[prop] > b[prop]) { return 1; }
      return 0;
    })
  }

  const reverse = (prop, array) => {
    array.sort((a, b) => {
      if(a[prop] > b[prop]) { return -1; }
      if(a[prop] < b[prop]) { return 1; }
      return 0;
    })
  }

  switch (props.sortType) {
    case 'title-az':
      sort('title', props.items);
      break;
    case 'title-za':
      reverse('title', props.items);
      break;
    case 'year-newer':
      reverse('year', props.items);
      break;
    case 'year-older':
      sort('year', props.items);
      break;
    default:
      sort('title', props.items);
      break;
  }

  return (
    <div className={'content__contained catalog'}>
      <div className={'results-found'}>
        <p id={'items-found'}></p>
      </div>
      <div id={'catalog'} className={'item-listing'}>
        {
          props.items.map((item, index) => {
            if (item.genre.includes(props.genreName) || props.genreName === 'all') {
              return (
                <Item
                  key={index}
                  poster={item.poster}
                  title={item.title}
                  name={item.name}
                  year={item.year}
                  genre={item.genre}
                />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Catalog