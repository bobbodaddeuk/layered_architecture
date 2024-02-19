// __tests__/unit/posts.repository.unit.spec.js

import { jest } from "@jest/globals";
import { PostsRepository } from "../../../src/repositories/posts.repository";

// Prisma 클라이언트에서는 아래 5개의 메서드만 사용합니다.
let mockPrisma = {
  posts: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

let postsRepository = new PostsRepository(mockPrisma);

describe("Posts Repository Unit Test", () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  });

  test("findAllPosts Method", async () => {
    // TODO: 여기에 코드를 작성해야합니다.
  });

  test("createPost Method", async () => {
    // TODO: 여기에 코드를 작성해야합니다.
  });
});
