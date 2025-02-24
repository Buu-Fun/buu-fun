import { SubthreadStyle } from "@/gql/types/graphql";
import { TSubthread } from "@/lib/react-query/threads-types";

export const data: { items: TSubthread[] } = {
  items: [
    {
      _id: "86aab9e7-a702-4198-9392-2fba30284236",
      address: "0x123345235213",
      createdAt: "2025-02-23T15:44:43.891Z",
      updatedAt: "2025-02-23T15:44:55.474Z",
      threadId: "56f7d82c-c8cc-490f-b06a-be198537b353",
      prompt: "can you generate a 3d model of a computer table?",
      style: "Metallic" as SubthreadStyle,
      imageRequests: [
        {
          _id: "85c0ee64-2720-476a-b3f2-7e2eae700291",
          status: "Success",
          metadata: {
            prompt:
              "can you generate a 3d model of a computer table?. A 3D object optimized for real-time rendering in video games, featuring clean topology, efficient UV mapping, rendered on a pure white background with balanced lighting, no shadows, and no extraneous elements. The asset must display clearly defined colors and boundaries, without any base or additional components. . Reflective surfaces, metallic sheens, chrome or gold materials, industrial feel.",
            imageSize: {
              width: 2048,
              height: 2048,
            },
            numOfInferenceSteps: 28,
            seed: 3332385,
            loras: null,
            guidanceScale: 3.5,
            syncMode: false,
            numImages: 1,
            enableSafetyChecker: true,
            outputFormat: "png",
            webhookUrl: "",
          },
          type: "fal-ai/flux-lora",
          images: [
            {
              content_type: "image/png",
              file_name: "",
              file_size: 1,
              url: "https://v3.fal.media/files/panda/VraAoTor9GYtK-wUPVBK5_d854f101dec644df84082c05eaed11dd.png",
            },
          ],
          model_mesh: {
            content_type: "",
            file_name: "",
            file_size: 1,
            url: "",
          },
          timings: {inference: 1},
        },
      ],
      modelRequests: [
        {
          _id: "cf55e371-7625-4407-8e2e-1c9783554867",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/panda/VraAoTor9GYtK-wUPVBK5_d854f101dec644df84082c05eaed11dd.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
        //   images: null,
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 4159072,
            url: "https://v3.fal.media/files/zebra/yg05TRDL_iqn1BBB1pnLw_model.glb",
          },
          images: [],
          timings: {
            inference: 1
          },
        },
      ],
    },
  ],
//   metadata: {
//     limit: 10,
//     offset: 0,
//     orderBy: "createdAt",
//     orderDirection: "asc",
//     numElements: 1,
//     page: 1,
//     pages: 1,
//   },
};
