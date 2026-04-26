import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";


import { Subject } from "@/types";

import { MOCK_SUBJECTS } from "./mock-data";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}: 
    GetListParams): Promise<GetListResponse<TData>> => {
    if(resource !== 'subjects') return {data: [] as TData[], total: 0};

    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length
    }

  },

  getOne: async () => { throw new Error("This function is not present in mock provider")},
  create: async () => { throw new Error("This function is not present in mock provider")},
  update: async () => { throw new Error("This function is not present in mock provider")},
 deleteOne: async () => { throw new Error("This function is not present in mock provider")},

  getApiUrl: () => ''
}

