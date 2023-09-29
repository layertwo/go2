$version: "2"
namespace dev.layertwo

use aws.protocols#restJson1

/// A sample smithy api
@restJson1
service GoApi {
    version: "1.0"
    operations: [SayHello]
    errors: [
      BadRequestError
      NotAuthorizedError
      InternalFailureError
    ]
}