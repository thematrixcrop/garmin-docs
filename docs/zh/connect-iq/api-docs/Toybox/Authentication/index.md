---
title: "Module: Toybox.Authentication"
---
# Module: Toybox.Authentication

## Overview

The Authentication Module provides tools for authentication.

With the Authentication module, Connect IQ apps will be able to make OAuth requests redirected through Connect IQ mobile app.

Since:

API Level 3.3.0

## Classes Under Namespace

**Classes:** [Message](/connect-iq/api-docs/Toybox/Authentication/Message/), [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)

## Constant Summary

### OAuthResultType

Since:

API Level 3.3.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| OAUTH\_RESULT\_TYPE\_URL | 0 |
API Level 3.3.0

 |

How the OAuth token will be returned in the final step.

 |

### OAuthSigningMethod

Since:

API Level 3.3.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| OAUTH\_SIGNING\_METHOD\_HMAC\_SHA1 | 0 |
API Level 3.3.0

 |

How the OAuth request will be signed

 |

## Instance Method Summary [collapse](#)

-   [**makeOAuthRequest**](#makeOAuthRequest-instance_function)(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>) as **Void**

    Request an OAuth sign-in through Garmin Connect IQ Mobile App A notification will trigger on the phone, that when clicked, provides a web view that shows `requestUrl`.

-   [**registerForOAuthMessages**](#registerForOAuthMessages-instance_function)(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Authentication.OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)) as **Void**) as **Void**

    Register a callback for receiving OAuth messages.


## Instance Method Details

### **makeOAuthRequest(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>)** as **Void**

Request an OAuth sign-in through Garmin Connect IQ Mobile App

A notification will trigger on the phone, that when clicked, provides a web view that shows `requestUrl`. If the user grants permission to the app, then the callback registered by [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Authentication/#registerForOAuthMessages-instance_function) will be called with an [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/) from the OAuth response.

Parameters:

-   requestUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URL to load in the web view to begin authentication

-   requestParams — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Non-URL encoded parameters for the `requestUrl`

-   resultUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URL of the final page of authentication that contains the `resultKeys`

-   resultType — ([Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module)) —

    An OAUTH\_RESULT\_TYPE\_\* value that specifies the format of the result

-   resultKeys — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    The desired OAuth response values passed to the callback method. The keys map to the actual OAuth response keys, and the values map to the keys of the [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/) data.


Example:

```
using Toybox.Authentication;
using Toybox.System;

const CLIENT_ID = "myClientID";
const OAUTH_CODE = "myOAuthCode";
const OAUTH_ERROR = "myOAuthError";

// register a callback to capture results from OAuth requests
Authentication.registerForOAuthMessages(method(:onOAuthMessage));

// wrap the OAuth request in a function
function getOAuthToken() {
   status = "Look at OAuth screen\n";
   Ui.requestUpdate();

   // set the makeOAuthRequest parameters
   var params = {
       "redirect_uri" => "connectiq://oauth",
       "response_type" => "code",
       "client_id" => $.CLIENT_ID
   };

   // makeOAuthRequest triggers login prompt on mobile device.
   // "responseCode" and "responseError" are the parameters passed
   // to the resultUrl. Check the oauth provider's documentation
   // to determine the correct strings to use.
   Auth.makeOAuthRequest(
       "https://requesturl.com",
       params,
       "http://resulturl.com",
       Auth.OAUTH_RESULT_TYPE_URL,
       {"responseCode" => $.OAUTH_CODE, "responseError" => $.OAUTH_ERROR}
   );
}

// implement the OAuth callback method
function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[$.OAUTH_CODE];
        var error = message.data[$.OAUTH_ERROR];
    } else {
        // return an error
    }
}
// the OAuth service can now be used with a makeWebRequest() call
```

Since:

API Level 3.3.0

### **registerForOAuthMessages(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Authentication.OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)) as **Void**)** as **Void**

Register a callback for receiving OAuth messages.

The callback will be called once for each received OAuth message. If there are messages waiting for the app when this function is called, the callback will immediately be called once for each waiting message.

Parameters:

-   method — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A reference to a callback, which must receive a `data` argument of the type [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/).


Example:

```
using Toybox.Authentication;

function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[OAUTH_CODE];
        var error = message.data[OAUTH_ERROR];
    } else {
        // return an error
    }
}
Authentication.registerForOAuthMessages(method(:onOAuthMessage));
```

Since:

API Level 3.3.0
