package com.nocountry.backend.exception;

public class ParamNotFoundException extends RuntimeException {
    public ParamNotFoundException(String msg) {
        super(msg);
    }
}
