import { useState } from "react";

/**
 * This is a clever little "hack" to make sure we make only one instance of
 * something for a given instance of the component. We store it in
 * lazily-initialized state and only return the state value and ignore the
 * state updater. This is the simplest way to do this.
 *
 * @param {Function} initializer A callback to initialize the value
 * @returns a constant value returned from the initializer
 */
export const useConstant = <TValue>(initializer: () => TValue): TValue =>
  useState(initializer)[0];
