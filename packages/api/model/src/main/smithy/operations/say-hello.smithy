$version: "2"
namespace dev.layertwo

@readonly
@http(method: "GET", uri: "/hello")
@handler(language: "python")
operation SayHello {
    input := {
        @httpQuery("name")
        @required
        name: String
    }
    output := {
        @required
        message: String
    }
    errors: [NotFoundError]
}
