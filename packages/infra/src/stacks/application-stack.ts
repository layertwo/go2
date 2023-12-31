import { UserIdentity } from "@aws/pdk/identity";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiConstruct } from "../constructs/api";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const userIdentity = new UserIdentity(this, `${id}UserIdentity`);
    new ApiConstruct(this, "Api", {
      userIdentity,
    });
  }
}
