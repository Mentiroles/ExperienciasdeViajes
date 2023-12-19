export function throwEmailInUseError() {
  throw {
    httpStatus: 400,
    error: "EMAIL_IN_USE",
  };
}

export function throwNicknameInUseError() {
  throw {
    httpStatus: 400,
    error: "NICKNAME_IN_USE",
  };
}

export function throwMessageIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "MESSAGE_IS_REQUIRED",
  };
}

export function throwNotFoundError() {
  throw {
    httpStatus: 408,
    error: "NOT_FOUND",
  };
}

export function throwUnauthorizedError() {
  throw {
    httpStatus: 401,
    error: "UNAUTHORIZED",
  };
}

export function throwInvalidLocationError() {
  throw {
    httpStatus: 400,
    error: "INVALID_LOCATION",
  };
}
export function throwLocationIsRequired() {
  throw {
    httpStatus: 400,
    error: "LOCATION_IS_REQUIRED",
  };
}

export function throwDescriptionIsRequired() {
  throw {
    httpStatus: 400,
    error: "DESCRIPTION_IS_REQUIRED",
  };
}

export function throwPhotoIsRequired() {
  throw {
    httpStatus: 400,
    error: "PHOTO_IS_REQUIRED",
  };
}

export function throwEmailIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "EMAIL_IS_REQUIRED",
  };
}

export function throwPasswordIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "PASSWORD_IS_REQUIRED",
  };
}

export function throwIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "ID_IS_REQUIRED",
  };
}

export function throwNicknameIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "NICKNAME_IS_REQUIRED",
  };
}

export function throwRecommendationIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "RECOMMENDATION_ID_IS_REQUIRED",
  };
}

export function throwCommentIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "COMMENT_ID_IS_REQUIRED",
  };
}

export function throwTitleIsRequiredError() {
  throw {
    httpStatus: 408,
    error: "TITLE_IS_REQUIRED",
  };
}

export function throwCategoryIsRequiredError() {
  throw {
    httpStatus: 500,
    error: "CATEGORY_IS_REQUIRED",
  };
}

export function throwImageIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "IMAGE_IS_REQUIRED",
  };
}
export function throwLocationIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "LOCATION_IS_REQUIRED",
  };
}
export function throwDescriptionIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "DESCRIPTION_IS_REQUIRED",
  };
}

export function throwRecommendationAlreadyExistsError() {
  throw {
    httpStatus: 400,
    error: "RECOMMENDATION_ALREADY_EXISTS",
  };
}
