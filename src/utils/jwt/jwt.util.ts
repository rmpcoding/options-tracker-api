import jwt from "jsonwebtoken";

import config from "../../config/config";

class JwtUtil {
  async createAccessToken(payload: object) {
    const secret = config.tokenSecret;
    return jwt.sign(payload, secret, { expiresIn: "12h" });
  }

  // token rotation refresh token auth strategy

  async createRefreshToken(payload: object) {
    const secret = config.refreshTokenSecret;
    return jwt.sign(payload, secret, { expiresIn: "14d" });
  }

  async createTokens(payload: object) {
    const accessToken = await this.createAccessToken(payload);
    const refreshToken = await this.createRefreshToken(payload);
    return { accessToken, refreshToken };
  }

  async verifyAccessToken(token: string) {
    const secret = config.tokenSecret;
    return jwt.verify(token, secret);
  }

  async verifyRefreshToken(token: string) {
    const secret = config.refreshTokenSecret;
    return jwt.verify(token, secret);
  }
}

const jwtUtil = new JwtUtil();

export default jwtUtil;
