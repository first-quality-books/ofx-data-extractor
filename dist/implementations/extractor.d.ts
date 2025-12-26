import type { ExtractorConfig, MetaData, TransactionsSummary } from '../@types/common';
import { IExtractor } from '../interfaces/extractor.interface';
import { CustomExtractor } from '../interfaces/custom-extractor.interface';
import { Reader } from './reader';
import { OfxResponse, OfxStructure } from '../@types/ofx/index';
import { StatementTransaction } from '../@types/ofx/common';
export declare class Extractor<T = any> implements IExtractor<T> {
    private readonly customExtractor?;
    private customExtractorInstance;
    private dataReaderInstance;
    constructor(customExtractor?: CustomExtractor | undefined);
    data(readData: Reader): this;
    config(config: ExtractorConfig): this;
    getType(): import("../@types/common").Types;
    getHeaders(): MetaData;
    getBankTransferList(): StatementTransaction[];
    getCreditCardTransferList(): StatementTransaction[];
    getTransactionsSummary(): TransactionsSummary;
    getContent(): OfxStructure;
    toJson(): OfxResponse;
}
