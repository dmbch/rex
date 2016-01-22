'use strict';

import test from 'tape';

import reduce from '../../src/reducers/content';

import {
  UPDATE_HOME_CONTENT,
  UPDATE_ABOUT_CONTENT
}
from '../../src/constants';

test('content reducer states', ({ test, end }) => {

  const payload = { foo: 'bar' };

  test('content reducer default state', ({ deepEqual, end }) => {
    const state = reduce(undefined, { type: 'NONE', payload: null });
    {
      const actual = state.home;
      const expected = {};
      const msg = 'default home state should be empty';
      deepEqual(actual, expected, msg);
    }
    {
      const actual = state.about;
      const expected = {};
      const msg = 'default about state should be empty';
      deepEqual(actual, expected, msg);
    }
    end();
  });

  test('content reducer partially updated state', ({ deepEqual, end }) => {
    const state = reduce(undefined, { type: UPDATE_HOME_CONTENT, payload });
    {
      const actual = state.home;
      const expected = payload;
      const msg = 'updated home state should equal payload';
      deepEqual(actual, expected, msg);
    }
    {
      const actual = state.about;
      const expected = {};
      const msg = 'default about state should be empty';
      deepEqual(actual, expected, msg);
    }
    end();
  });

  test('content reducer fully updated state', ({ deepEqual, end }) => {
    const state = reduce(
      reduce(undefined, { type: UPDATE_HOME_CONTENT, payload }),
      { type: UPDATE_ABOUT_CONTENT, payload }
    );
    {
      const actual = state.home;
      const expected = payload;
      const msg = 'updated home state should equal payload';
      deepEqual(actual, expected, msg);
    }
    {
      const actual = state.about;
      const expected = payload;
      const msg = 'updated about state should equal payload';
      deepEqual(actual, expected, msg);
    }
    end();
  });

  end();
});
