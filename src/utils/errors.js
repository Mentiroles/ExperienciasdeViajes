export function throwEmailInUseError() {
  throw {
    httpStatus: 400,
    error: "EMAIL_IN_USE",
    message: "Email in use",
  };
}

export function throwNicknameInUseError() {
  throw {
    httpStatus: 400,
    error: "NICKNAME_IN_USE",
    message: "Nickname in use",
  };
}

export function throwMessageIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "MESSAGE_IS_REQUIRED",
    message: "Message is required",
  };
}

export function throwNotFoundError() {
  throw {
    httpStatus: 408,
    error: "NOT_FOUND",
    message: "Not found",
  };
}

export function throwUnauthorizedError() {
  throw {
    httpStatus: 401,
    error: "UNAUTHORIZED",
    message: "Unauthorized",
  };
}

export function throwInvalidLocationError() {
  throw {
    httpStatus: 400,
    error: "INVALID_LOCATION",
    message: "Invalid location",
  };
}
export function throwLocationIsRequired() {
  throw {
    httpStatus: 400,
    error: "LOCATION_IS_REQUIRED",
    message: "Location is required",
  };
}

export function throwDescriptionIsRequired() {
  throw {
    httpStatus: 400,
    error: "DESCRIPTION_IS_REQUIRED",
    message: "Description is required",
  };
}

export function throwPhotoIsRequired() {
  throw {
    httpStatus: 400,
    error: "PHOTO_IS_REQUIRED",
    message: "Photo is required",
  };
}

export function throwEmailIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "EMAIL_IS_REQUIRED",
    message: "Email is required",
  };
}

export function throwPasswordIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "PASSWORD_IS_REQUIRED",
    message: "Password is required",
  };
}

export function throwInvalidPasswordError() {
  throw {
    httpStatus: 400,
    error: "INVALID_PASSWORD",
    message: "Invalid password",
  };
}

export function throwIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "ID_IS_REQUIRED",
    message: "Id is required",
  };
}

export function throwNicknameIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "NICKNAME_IS_REQUIRED",
    message: "Nickname is required",
  };
}

export function throwRecommendationIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "RECOMMENDATION_ID_IS_REQUIRED",
    message: "Recommendation id is required",
  };
}

export function throwCommentIdIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "COMMENT_ID_IS_REQUIRED",
    message: "Comment id is required",
  };
}

export function throwTitleIsRequiredError() {
  throw {
    httpStatus: 408,
    error: "TITLE_IS_REQUIRED",
    message: "Title is required",
  };
}

export function throwCategoryIsRequiredError() {
  throw {
    httpStatus: 500,
    error: "CATEGORY_IS_REQUIRED",
    message: "Category is required",
  };
}

export function throwImageIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "IMAGE_IS_REQUIRED",
    message: "Image is required",
  };
}
export function throwLocationIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "LOCATION_IS_REQUIRED",
    message: "Location is required",
  };
}
export function throwDescriptionIsRequiredError() {
  throw {
    httpStatus: 400,
    error: "DESCRIPTION_IS_REQUIRED",
    message: "Description is required",
  };
}

export function throwRecommendationAlreadyExistsError() {
  throw {
    httpStatus: 400,
    error: "RECOMMENDATION_ALREADY_EXISTS",
    message: "Recommendation already exists",
  };
}

export function throwInvalidFileTypeError() {
  throw {
    httpStatus: 400,
    error: "INVALID_FILE_TYPE",
    message: "Invalid file type, try uploading a .jpg or .png image",
  };
}

export function throwInvalidOldPasswordError() {
  throw {
    httpStatus: 400,
    error: "INVALID_OLD_PASSWORD",
    message: "Invalid password, try again.",
  };
}

export function throwPasswordMatchError() {
  throw {
    httpStatus: 400,
    error: "PASSWORD_MATCH",
    message: "Passwords do not match",
  };
}
