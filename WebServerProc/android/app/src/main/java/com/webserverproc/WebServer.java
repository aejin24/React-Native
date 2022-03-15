package com.webserer;

import fi.iki.elonen.NanoHTTPD;

public class WebServer extends NanoHTTPD {
    public WebServer(int port) {
        super(port);
    }

    @Override
    public Response serve(IHTTPSession session){

        return newFixedLengthResponse("NanoHTTPD Web Server Initialize!!!!!!!!!!!!!!!!!!");
    }
}
