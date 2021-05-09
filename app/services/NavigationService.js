/* eslint-disable no-unused-expressions */
import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateBack() {
  navigationRef.current?.goBack();
}

export function navigateToTheTop() {
  navigationRef.current?.popToTop();
}

export function navigateBackTo(routeName) {
  navigationRef.current?.navigate(routeName);
}
