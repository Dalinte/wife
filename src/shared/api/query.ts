import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createChatCompletion: build.mutation<
      CreateChatCompletionApiResponse,
      CreateChatCompletionApiArg
    >({
      query: (queryArg) => ({
        url: `/chat/completions`,
        method: "POST",
        body: queryArg.createChatCompletionRequest,
      }),
    }),
    createCompletion: build.mutation<
      CreateCompletionApiResponse,
      CreateCompletionApiArg
    >({
      query: (queryArg) => ({
        url: `/completions`,
        method: "POST",
        body: queryArg.createCompletionRequest,
      }),
    }),
    createEdit: build.mutation<CreateEditApiResponse, CreateEditApiArg>({
      query: (queryArg) => ({
        url: `/edits`,
        method: "POST",
        body: queryArg.createEditRequest,
      }),
    }),
    createImage: build.mutation<CreateImageApiResponse, CreateImageApiArg>({
      query: (queryArg) => ({
        url: `/images/generations`,
        method: "POST",
        body: queryArg.createImageRequest,
      }),
    }),
    createImageEdit: build.mutation<
      CreateImageEditApiResponse,
      CreateImageEditApiArg
    >({
      query: (queryArg) => ({
        url: `/images/edits`,
        method: "POST",
        body: queryArg.createImageEditRequest,
      }),
    }),
    createImageVariation: build.mutation<
      CreateImageVariationApiResponse,
      CreateImageVariationApiArg
    >({
      query: (queryArg) => ({
        url: `/images/variations`,
        method: "POST",
        body: queryArg.createImageVariationRequest,
      }),
    }),
    createEmbedding: build.mutation<
      CreateEmbeddingApiResponse,
      CreateEmbeddingApiArg
    >({
      query: (queryArg) => ({
        url: `/embeddings`,
        method: "POST",
        body: queryArg.createEmbeddingRequest,
      }),
    }),
    createTranscription: build.mutation<
      CreateTranscriptionApiResponse,
      CreateTranscriptionApiArg
    >({
      query: (queryArg) => ({
        url: `/audio/transcriptions`,
        method: "POST",
        body: queryArg.createTranscriptionRequest,
      }),
    }),
    createTranslation: build.mutation<
      CreateTranslationApiResponse,
      CreateTranslationApiArg
    >({
      query: (queryArg) => ({
        url: `/audio/translations`,
        method: "POST",
        body: queryArg.createTranslationRequest,
      }),
    }),
    listFiles: build.query<ListFilesApiResponse, ListFilesApiArg>({
      query: () => ({ url: `/files` }),
    }),
    createFile: build.mutation<CreateFileApiResponse, CreateFileApiArg>({
      query: (queryArg) => ({
        url: `/files`,
        method: "POST",
        body: queryArg.createFileRequest,
      }),
    }),
    deleteFile: build.mutation<DeleteFileApiResponse, DeleteFileApiArg>({
      query: (queryArg) => ({
        url: `/files/${queryArg.fileId}`,
        method: "DELETE",
      }),
    }),
    retrieveFile: build.query<RetrieveFileApiResponse, RetrieveFileApiArg>({
      query: (queryArg) => ({ url: `/files/${queryArg.fileId}` }),
    }),
    downloadFile: build.query<DownloadFileApiResponse, DownloadFileApiArg>({
      query: (queryArg) => ({ url: `/files/${queryArg.fileId}/content` }),
    }),
    createFineTuningJob: build.mutation<
      CreateFineTuningJobApiResponse,
      CreateFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs`,
        method: "POST",
        body: queryArg.createFineTuningJobRequest,
      }),
    }),
    listPaginatedFineTuningJobs: build.query<
      ListPaginatedFineTuningJobsApiResponse,
      ListPaginatedFineTuningJobsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs`,
        params: { after: queryArg.after, limit: queryArg.limit },
      }),
    }),
    retrieveFineTuningJob: build.query<
      RetrieveFineTuningJobApiResponse,
      RetrieveFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}`,
      }),
    }),
    listFineTuningEvents: build.query<
      ListFineTuningEventsApiResponse,
      ListFineTuningEventsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/events`,
        params: { after: queryArg.after, limit: queryArg.limit },
      }),
    }),
    cancelFineTuningJob: build.mutation<
      CancelFineTuningJobApiResponse,
      CancelFineTuningJobApiArg
    >({
      query: (queryArg) => ({
        url: `/fine_tuning/jobs/${queryArg.fineTuningJobId}/cancel`,
        method: "POST",
      }),
    }),
    createFineTune: build.mutation<
      CreateFineTuneApiResponse,
      CreateFineTuneApiArg
    >({
      query: (queryArg) => ({
        url: `/fine-tunes`,
        method: "POST",
        body: queryArg.createFineTuneRequest,
      }),
    }),
    listFineTunes: build.query<ListFineTunesApiResponse, ListFineTunesApiArg>({
      query: () => ({ url: `/fine-tunes` }),
    }),
    retrieveFineTune: build.query<
      RetrieveFineTuneApiResponse,
      RetrieveFineTuneApiArg
    >({
      query: (queryArg) => ({ url: `/fine-tunes/${queryArg.fineTuneId}` }),
    }),
    cancelFineTune: build.mutation<
      CancelFineTuneApiResponse,
      CancelFineTuneApiArg
    >({
      query: (queryArg) => ({
        url: `/fine-tunes/${queryArg.fineTuneId}/cancel`,
        method: "POST",
      }),
    }),
    listFineTuneEvents: build.query<
      ListFineTuneEventsApiResponse,
      ListFineTuneEventsApiArg
    >({
      query: (queryArg) => ({
        url: `/fine-tunes/${queryArg.fineTuneId}/events`,
        params: { stream: queryArg.stream },
      }),
    }),
    listModels: build.query<ListModelsApiResponse, ListModelsApiArg>({
      query: () => ({ url: `/models` }),
    }),
    retrieveModel: build.query<RetrieveModelApiResponse, RetrieveModelApiArg>({
      query: (queryArg) => ({ url: `/models/${queryArg.model}` }),
    }),
    deleteModel: build.mutation<DeleteModelApiResponse, DeleteModelApiArg>({
      query: (queryArg) => ({
        url: `/models/${queryArg.model}`,
        method: "DELETE",
      }),
    }),
    createModeration: build.mutation<
      CreateModerationApiResponse,
      CreateModerationApiArg
    >({
      query: (queryArg) => ({
        url: `/moderations`,
        method: "POST",
        body: queryArg.createModerationRequest,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as enhancedApi };
export type CreateChatCompletionApiResponse =
  /** status 200 OK */ CreateChatCompletionResponse;
export type CreateChatCompletionApiArg = {
  createChatCompletionRequest: CreateChatCompletionRequest;
};
export type CreateCompletionApiResponse =
  /** status 200 OK */ CreateCompletionResponse;
export type CreateCompletionApiArg = {
  createCompletionRequest: CreateCompletionRequest;
};
export type CreateEditApiResponse = /** status 200 OK */ Edit;
export type CreateEditApiArg = {
  createEditRequest: CreateEditRequest;
};
export type CreateImageApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageApiArg = {
  createImageRequest: CreateImageRequest;
};
export type CreateImageEditApiResponse = /** status 200 OK */ ImagesResponse;
export type CreateImageEditApiArg = {
  createImageEditRequest: CreateImageEditRequest;
};
export type CreateImageVariationApiResponse =
  /** status 200 OK */ ImagesResponse;
export type CreateImageVariationApiArg = {
  createImageVariationRequest: CreateImageVariationRequest;
};
export type CreateEmbeddingApiResponse =
  /** status 200 OK */ CreateEmbeddingResponse;
export type CreateEmbeddingApiArg = {
  createEmbeddingRequest: CreateEmbeddingRequest;
};
export type CreateTranscriptionApiResponse =
  /** status 200 OK */ CreateTranscriptionResponse;
export type CreateTranscriptionApiArg = {
  createTranscriptionRequest: CreateTranscriptionRequest;
};
export type CreateTranslationApiResponse =
  /** status 200 OK */ CreateTranslationResponse;
export type CreateTranslationApiArg = {
  createTranslationRequest: CreateTranslationRequest;
};
export type ListFilesApiResponse = /** status 200 OK */ ListFilesResponse;
export type ListFilesApiArg = void;
export type CreateFileApiResponse = /** status 200 OK */ OpenAiFile;
export type CreateFileApiArg = {
  createFileRequest: CreateFileRequest;
};
export type DeleteFileApiResponse = /** status 200 OK */ DeleteFileResponse;
export type DeleteFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type RetrieveFileApiResponse = /** status 200 OK */ OpenAiFile;
export type RetrieveFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type DownloadFileApiResponse = /** status 200 OK */ string;
export type DownloadFileApiArg = {
  /** The ID of the file to use for this request. */
  fileId: string;
};
export type CreateFineTuningJobApiResponse = /** status 200 OK */ FineTuningJob;
export type CreateFineTuningJobApiArg = {
  createFineTuningJobRequest: CreateFineTuningJobRequest;
};
export type ListPaginatedFineTuningJobsApiResponse =
  /** status 200 OK */ ListPaginatedFineTuningJobsResponse;
export type ListPaginatedFineTuningJobsApiArg = {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
};
export type RetrieveFineTuningJobApiResponse =
  /** status 200 OK */ FineTuningJob;
export type RetrieveFineTuningJobApiArg = {
  /** The ID of the fine-tuning job.
   */
  fineTuningJobId: string;
};
export type ListFineTuningEventsApiResponse =
  /** status 200 OK */ ListFineTuningJobEventsResponse;
export type ListFineTuningEventsApiArg = {
  /** The ID of the fine-tuning job to get events for.
   */
  fineTuningJobId: string;
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
};
export type CancelFineTuningJobApiResponse = /** status 200 OK */ FineTuningJob;
export type CancelFineTuningJobApiArg = {
  /** The ID of the fine-tuning job to cancel.
   */
  fineTuningJobId: string;
};
export type CreateFineTuneApiResponse = /** status 200 OK */ FineTune;
export type CreateFineTuneApiArg = {
  createFineTuneRequest: CreateFineTuneRequest;
};
export type ListFineTunesApiResponse =
  /** status 200 OK */ ListFineTunesResponse;
export type ListFineTunesApiArg = void;
export type RetrieveFineTuneApiResponse = /** status 200 OK */ FineTune;
export type RetrieveFineTuneApiArg = {
  /** The ID of the fine-tune job
   */
  fineTuneId: string;
};
export type CancelFineTuneApiResponse = /** status 200 OK */ FineTune;
export type CancelFineTuneApiArg = {
  /** The ID of the fine-tune job to cancel
   */
  fineTuneId: string;
};
export type ListFineTuneEventsApiResponse =
  /** status 200 OK */ ListFineTuneEventsResponse;
export type ListFineTuneEventsApiArg = {
  /** The ID of the fine-tune job to get events for.
   */
  fineTuneId: string;
  /** Whether to stream events for the fine-tune job. If set to true,
    events will be sent as data-only
    [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
    as they become available. The stream will terminate with a
    `data: [DONE]` message when the job is finished (succeeded, cancelled,
    or failed).
    
    If set to false, only events generated so far will be returned.
     */
  stream?: boolean;
};
export type ListModelsApiResponse = /** status 200 OK */ ListModelsResponse;
export type ListModelsApiArg = void;
export type RetrieveModelApiResponse = /** status 200 OK */ Model;
export type RetrieveModelApiArg = {
  /** The ID of the model to use for this request */
  model: string;
};
export type DeleteModelApiResponse = /** status 200 OK */ DeleteModelResponse;
export type DeleteModelApiArg = {
  /** The model to delete */
  model: string;
};
export type CreateModerationApiResponse =
  /** status 200 OK */ CreateModerationResponse;
export type CreateModerationApiArg = {
  createModerationRequest: CreateModerationRequest;
};
export type ChatCompletionResponseMessage = {
  role: "system" | "user" | "assistant" | "function";
  content: string | null;
  function_call?: {
    name: string;
    arguments: string;
  };
};
export type CompletionUsage = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};
export type CreateChatCompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatCompletionResponseMessage;
    finish_reason: "stop" | "length" | "function_call";
  }[];
  usage?: CompletionUsage;
};
export type ChatCompletionRequestMessage = {
  role: "system" | "user" | "assistant" | "function";
  content: string | null;
  name?: string;
  function_call?: {
    name: string;
    arguments: string;
  };
};
export type ChatCompletionFunctionParameters = {
  [key: string]: any;
};
export type ChatCompletionFunctions = {
  name: string;
  description?: string;
  parameters: ChatCompletionFunctionParameters;
};
export type ChatCompletionFunctionCallOption = {
  name: string;
};
export type CreateChatCompletionRequest = {
  model:
    | string
    | (
        | "gpt-4"
        | "gpt-4-0314"
        | "gpt-4-0613"
        | "gpt-4-32k"
        | "gpt-4-32k-0314"
        | "gpt-4-32k-0613"
        | "gpt-3.5-turbo"
        | "gpt-3.5-turbo-16k"
        | "gpt-3.5-turbo-0301"
        | "gpt-3.5-turbo-0613"
        | "gpt-3.5-turbo-16k-0613"
      );
  messages: ChatCompletionRequestMessage[];
  functions?: ChatCompletionFunctions[];
  function_call?: ("none" | "auto") | ChatCompletionFunctionCallOption;
  temperature?: number | null;
  top_p?: number | null;
  n?: number | null;
  stream?: boolean | null;
  stop?: (string | null) | string[];
  max_tokens?: number | null;
  presence_penalty?: number | null;
  frequency_penalty?: number | null;
  logit_bias?: {
    [key: string]: number;
  } | null;
  user?: string;
};
export type CreateCompletionResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    text: string;
    index: number;
    logprobs: {
      tokens?: string[];
      token_logprobs?: number[];
      top_logprobs?: {
        [key: string]: number;
      }[];
      text_offset?: number[];
    } | null;
    finish_reason: "stop" | "length";
  }[];
  usage?: CompletionUsage;
};
export type CreateCompletionRequest = {
  model:
    | string
    | (
        | "babbage-002"
        | "davinci-002"
        | "text-davinci-003"
        | "text-davinci-002"
        | "text-davinci-001"
        | "code-davinci-002"
        | "text-curie-001"
        | "text-babbage-001"
        | "text-ada-001"
      );
  prompt: (string | string[] | number[] | number[][]) | null;
  suffix?: string | null;
  max_tokens?: number | null;
  temperature?: number | null;
  top_p?: number | null;
  n?: number | null;
  stream?: boolean | null;
  logprobs?: number | null;
  echo?: boolean | null;
  stop?: ((string | null) | string[]) | null;
  presence_penalty?: number | null;
  frequency_penalty?: number | null;
  best_of?: number | null;
  logit_bias?: {
    [key: string]: number;
  } | null;
  user?: string;
};
export type Edit = {
  object: string;
  created: number;
  choices: {
    text: string;
    index: number;
    finish_reason: "stop" | "length";
  }[];
  usage: CompletionUsage;
};
export type CreateEditRequest = {
  model: string | ("text-davinci-edit-001" | "code-davinci-edit-001");
  input?: string | null;
  instruction: string;
  n?: number | null;
  temperature?: number | null;
  top_p?: number | null;
};
export type Image = {
  url?: string;
  b64_json?: string;
};
export type ImagesResponse = {
  created: number;
  data: Image[];
};
export type CreateImageRequest = {
  prompt: string;
  n?: number | null;
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  response_format?: ("url" | "b64_json") | null;
  user?: string;
};
export type CreateImageEditRequest = {
  image: Blob;
  mask?: Blob;
  prompt: string;
  n?: number | null;
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  response_format?: ("url" | "b64_json") | null;
  user?: string;
};
export type CreateImageVariationRequest = {
  image: Blob;
  n?: number | null;
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  response_format?: ("url" | "b64_json") | null;
  user?: string;
};
export type Embedding = {
  index: number;
  object: string;
  embedding: number[];
};
export type CreateEmbeddingResponse = {
  object: string;
  model: string;
  data: Embedding[];
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
};
export type CreateEmbeddingRequest = {
  model: string | "text-embedding-ada-002";
  input: string | string[] | number[] | number[][];
  user?: string;
};
export type CreateTranscriptionResponse = {
  text: string;
};
export type CreateTranscriptionRequest = {
  file: Blob;
  model: string | "whisper-1";
  prompt?: string;
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  temperature?: number;
  language?: string;
};
export type CreateTranslationResponse = {
  text: string;
};
export type CreateTranslationRequest = {
  file: Blob;
  model: string | "whisper-1";
  prompt?: string;
  response_format?: string;
  temperature?: number;
};
export type OpenAiFile = {
  id: string;
  object: string;
  bytes: number;
  created_at: number;
  filename: string;
  purpose: string;
  status?: string;
  status_details?: string | null;
};
export type ListFilesResponse = {
  object: string;
  data: OpenAiFile[];
};
export type CreateFileRequest = {
  file: Blob;
  purpose: string;
};
export type DeleteFileResponse = {
  id: string;
  object: string;
  deleted: boolean;
};
export type FineTuningJob = {
  id: string;
  object: string;
  created_at: number;
  finished_at?: number | null;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparameters: {
    n_epochs?: "auto" | number;
  };
  training_file: string;
  validation_file: string | null;
  result_files: string[];
  trained_tokens: number | null;
  error: {
    message?: string;
    code?: string;
    param?: string | null;
  } | null;
};
export type CreateFineTuningJobRequest = {
  training_file: string;
  validation_file?: string | null;
  model: string | ("babbage-002" | "davinci-002" | "gpt-3.5-turbo");
  hyperparameters?: {
    n_epochs?: "auto" | number;
  };
  suffix?: string | null;
};
export type ListPaginatedFineTuningJobsResponse = {
  object: string;
  data: FineTuningJob[];
  has_more: boolean;
};
export type FineTuningJobEvent = {
  id: string;
  object: string;
  created_at: number;
  level: "info" | "warn" | "error";
  message: string;
};
export type ListFineTuningJobEventsResponse = {
  object: string;
  data: FineTuningJobEvent[];
};
export type FineTuneEvent = {
  object: string;
  created_at: number;
  level: string;
  message: string;
};
export type FineTune = {
  id: string;
  object: string;
  created_at: number;
  updated_at: number;
  model: string;
  fine_tuned_model: string | null;
  organization_id: string;
  status: string;
  hyperparams: {
    n_epochs: number;
    batch_size: number;
    prompt_loss_weight: number;
    learning_rate_multiplier: number;
    compute_classification_metrics?: boolean;
    classification_positive_class?: string;
    classification_n_classes?: number;
  };
  training_files: OpenAiFile[];
  validation_files: OpenAiFile[];
  result_files: OpenAiFile[];
  events?: FineTuneEvent[];
};
export type CreateFineTuneRequest = {
  training_file: string;
  validation_file?: string | null;
  model?: (string | ("ada" | "babbage" | "curie" | "davinci")) | null;
  n_epochs?: number | null;
  batch_size?: number | null;
  learning_rate_multiplier?: number | null;
  prompt_loss_weight?: number | null;
  compute_classification_metrics?: boolean | null;
  classification_n_classes?: number | null;
  classification_positive_class?: string | null;
  classification_betas?: number[] | null;
  suffix?: string | null;
};
export type ListFineTunesResponse = {
  object: string;
  data: FineTune[];
};
export type ListFineTuneEventsResponse = {
  object: string;
  data: FineTuneEvent[];
};
export type Model = {
  id: string;
  object: string;
  created: number;
  owned_by: string;
};
export type ListModelsResponse = {
  object: string;
  data: Model[];
};
export type DeleteModelResponse = {
  id: string;
  object: string;
  deleted: boolean;
};
export type CreateModerationResponse = {
  id: string;
  model: string;
  results: {
    flagged: boolean;
    categories: {
      hate: boolean;
      "hate/threatening": boolean;
      harassment: boolean;
      "harassment/threatening": boolean;
      "self-harm": boolean;
      "self-harm/intent": boolean;
      "self-harm/instructions": boolean;
      sexual: boolean;
      "sexual/minors": boolean;
      violence: boolean;
      "violence/graphic": boolean;
    };
    category_scores: {
      hate: number;
      "hate/threatening": number;
      harassment: number;
      "harassment/threatening": number;
      "self-harm": number;
      "self-harm/intent": number;
      "self-harm/instructions": number;
      sexual: number;
      "sexual/minors": number;
      violence: number;
      "violence/graphic": number;
    };
  }[];
};
export type CreateModerationRequest = {
  input: string | string[];
  model?: string | ("text-moderation-latest" | "text-moderation-stable");
};
export const {
  useCreateChatCompletionMutation,
  useCreateCompletionMutation,
  useCreateEditMutation,
  useCreateImageMutation,
  useCreateImageEditMutation,
  useCreateImageVariationMutation,
  useCreateEmbeddingMutation,
  useCreateTranscriptionMutation,
  useCreateTranslationMutation,
  useListFilesQuery,
  useLazyListFilesQuery,
  useCreateFileMutation,
  useDeleteFileMutation,
  useRetrieveFileQuery,
  useLazyRetrieveFileQuery,
  useDownloadFileQuery,
  useLazyDownloadFileQuery,
  useCreateFineTuningJobMutation,
  useListPaginatedFineTuningJobsQuery,
  useLazyListPaginatedFineTuningJobsQuery,
  useRetrieveFineTuningJobQuery,
  useLazyRetrieveFineTuningJobQuery,
  useListFineTuningEventsQuery,
  useLazyListFineTuningEventsQuery,
  useCancelFineTuningJobMutation,
  useCreateFineTuneMutation,
  useListFineTunesQuery,
  useLazyListFineTunesQuery,
  useRetrieveFineTuneQuery,
  useLazyRetrieveFineTuneQuery,
  useCancelFineTuneMutation,
  useListFineTuneEventsQuery,
  useLazyListFineTuneEventsQuery,
  useListModelsQuery,
  useLazyListModelsQuery,
  useRetrieveModelQuery,
  useLazyRetrieveModelQuery,
  useDeleteModelMutation,
  useCreateModerationMutation,
} = injectedRtkApi;
