import { MonorepoTsProject } from "@aws/pdk/monorepo";
import {
    DocumentationFormat,
    Language,
    ModelLanguage,
    TypeSafeApiProject,
} from "@aws/pdk/type-safe-api";
import { javascript } from "projen";

const project = new MonorepoTsProject({
  devDeps: ["@aws/pdk"],
  name: "go2",
  packageManager: javascript.NodePackageManager.PNPM,
  projenrcTs: true,
});

new TypeSafeApiProject({
  parent: project,
  outdir: "packages/api",
  name: "goapi",
  infrastructure: {
      language: Language.TYPESCRIPT,
  },
  model: {
      language: ModelLanguage.SMITHY,
      options: {
      smithy: {
          serviceName: {
          namespace: "dev.layertwo",
          serviceName: "GoApi",
          },
      },
      },
  },
  runtime: {
      languages: [Language.TYPESCRIPT],
  },
  documentation: {
      formats: [DocumentationFormat.HTML_REDOC],
  },
  handlers: {
      languages: [Language.PYTHON],
  },
});
project.synth();