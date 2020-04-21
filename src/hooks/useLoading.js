import React, { useState } from "react";

export default ({ classList } = []) => {
  const [loadingButton, setLoadingButton] = useState(null);
  const setLoadingState = isLoading => {
    loadingButton.disabled = isLoading;
    isLoading
      ? loadingButton.classList.add(...classList)
      : loadingButton.classList.remove(...classList);
  };
  return [setLoadingButton, setLoadingState];
};
