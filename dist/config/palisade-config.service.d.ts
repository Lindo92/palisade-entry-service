import { ConfigService } from "@nestjs/config";
export declare class PalisadeConfigService {
    private configservice;
    constructor(configservice: ConfigService);
    get mongoURI(): string;
}
