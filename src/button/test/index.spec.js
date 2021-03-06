import { mount } from '../../../test';
import Button from '..';

test('loading size', () => {
  const wrapper = mount(Button, {
    propsData: {
      loading: true,
      loadingSize: '10px'
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('click event', () => {
  const onClick = jest.fn();
  const wrapper = mount(Button, {
    context: {
      on: {
        click: onClick
      }
    }
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalled();
});

test('not trigger click event when disabled', () => {
  const onClick = jest.fn();
  const wrapper = mount(Button, {
    propsData: {
      disabled: true
    },
    context: {
      on: {
        click: onClick
      }
    }
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(0);
});

test('not trigger click event when loading', () => {
  const onClick = jest.fn();
  const wrapper = mount(Button, {
    propsData: {
      loading: true
    },
    context: {
      on: {
        click: onClick
      }
    }
  });

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(0);
});

test('touchstart event', () => {
  const onTouchstart = jest.fn();
  const wrapper = mount(Button, {
    context: {
      on: {
        touchstart: onTouchstart
      }
    }
  });

  wrapper.trigger('touchstart');
  expect(onTouchstart).toHaveBeenCalled();
});

test('hide border when color is gradient', () => {
  const wrapper = mount(Button, {
    propsData: {
      color: 'linear-gradient(#000, #fff)'
    }
  });

  expect(wrapper.element.style.border).toEqual('0px');
});
