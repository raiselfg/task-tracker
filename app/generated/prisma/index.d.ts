
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    Task: 'Task',
    Comment: 'Comment',
    Attachment: 'Attachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "project" | "projectMember" | "task" | "comment" | "attachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    project?: ProjectOmit
    projectMember?: ProjectMemberOmit
    task?: TaskOmit
    comment?: CommentOmit
    attachment?: AttachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    projectsOwned: number
    projectMembers: number
    tasksAssigned: number
    comments: number
    attachments: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectsOwned?: boolean | ProfileCountOutputTypeCountProjectsOwnedArgs
    projectMembers?: boolean | ProfileCountOutputTypeCountProjectMembersArgs
    tasksAssigned?: boolean | ProfileCountOutputTypeCountTasksAssignedArgs
    comments?: boolean | ProfileCountOutputTypeCountCommentsArgs
    attachments?: boolean | ProfileCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountProjectsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    members: number
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    comments: number
    attachments: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
    attachments?: boolean | TaskCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullname: string | null
    avatarUrl: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullname: string | null
    avatarUrl: string | null
    provider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    fullname: number
    avatarUrl: number
    provider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    fullname?: true
    avatarUrl?: true
    provider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string
    fullname: string | null
    avatarUrl: string | null
    provider: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectsOwned?: boolean | Profile$projectsOwnedArgs<ExtArgs>
    projectMembers?: boolean | Profile$projectMembersArgs<ExtArgs>
    tasksAssigned?: boolean | Profile$tasksAssignedArgs<ExtArgs>
    comments?: boolean | Profile$commentsArgs<ExtArgs>
    attachments?: boolean | Profile$attachmentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    fullname?: boolean
    avatarUrl?: boolean
    provider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullname" | "avatarUrl" | "provider" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectsOwned?: boolean | Profile$projectsOwnedArgs<ExtArgs>
    projectMembers?: boolean | Profile$projectMembersArgs<ExtArgs>
    tasksAssigned?: boolean | Profile$tasksAssignedArgs<ExtArgs>
    comments?: boolean | Profile$commentsArgs<ExtArgs>
    attachments?: boolean | Profile$attachmentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      projectsOwned: Prisma.$ProjectPayload<ExtArgs>[]
      projectMembers: Prisma.$ProjectMemberPayload<ExtArgs>[]
      tasksAssigned: Prisma.$TaskPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullname: string | null
      avatarUrl: string | null
      provider: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectsOwned<T extends Profile$projectsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, Profile$projectsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMembers<T extends Profile$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksAssigned<T extends Profile$tasksAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Profile$tasksAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Profile$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Profile$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly fullname: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly provider: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.projectsOwned
   */
  export type Profile$projectsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Profile.projectMembers
   */
  export type Profile$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Profile.tasksAssigned
   */
  export type Profile$tasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Profile.comments
   */
  export type Profile$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Profile.attachments
   */
  export type Profile$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    ownerId: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "ownerId" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$ProfilePayload<ExtArgs>
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: $Enums.Role | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    role: $Enums.Role | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    role: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    role?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    role: $Enums.Role
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    role?: boolean
  }

  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "role", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      role: $Enums.Role
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers and returns the data updated in the database.
     * @param {ProjectMemberUpdateManyAndReturnArgs} args - Arguments to update many ProjectMembers.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMember model
   */
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectMember updateManyAndReturn
   */
  export type ProjectMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
    /**
     * Limit how many ProjectMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMember
     */
    omit?: ProjectMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assigneeId: string | null
    projectId: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assigneeId: string | null
    projectId: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    assigneeId: number
    projectId: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    projectId?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    projectId?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    projectId?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string | null
    status: $Enums.Status
    priority: $Enums.Priority
    assigneeId: string | null
    projectId: string
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    projectId?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    projectId?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    projectId?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    projectId?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "assigneeId" | "projectId" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      assignee: Prisma.$ProfilePayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      status: $Enums.Status
      priority: $Enums.Priority
      assigneeId: string | null
      projectId: string
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Task$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'Status'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Task.attachments
   */
  export type Task$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    taskId: string | null
    parentId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    userId: string | null
    taskId: string | null
    parentId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    taskId: number
    parentId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    taskId?: true
    parentId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    taskId?: true
    parentId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    taskId?: true
    parentId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    userId: string
    taskId: string
    parentId: string | null
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    taskId?: boolean
    parentId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    taskId?: boolean
    parentId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    taskId?: boolean
    parentId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    taskId?: boolean
    parentId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "taskId" | "parentId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      userId: string
      taskId: string
      parentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly taskId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    taskId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    taskId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    fileUrl: number
    taskId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    fileUrl?: true
    taskId?: true
    userId?: true
    createdAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    fileUrl?: true
    taskId?: true
    userId?: true
    createdAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    fileUrl?: true
    taskId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    fileUrl: string
    taskId: string
    userId: string
    createdAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    fileUrl?: boolean
    taskId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileUrl" | "taskId" | "userId" | "createdAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileUrl: string
      taskId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly fileUrl: FieldRef<"Attachment", 'String'>
    readonly taskId: FieldRef<"Attachment", 'String'>
    readonly userId: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullname: 'fullname',
    avatarUrl: 'avatarUrl',
    provider: 'provider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    role: 'role'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assigneeId: 'assigneeId',
    projectId: 'projectId',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    taskId: 'taskId',
    parentId: 'parentId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    taskId: 'taskId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    fullname?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    provider?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    projectsOwned?: ProjectListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectsOwned?: ProjectOrderByRelationAggregateInput
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
    tasksAssigned?: TaskOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    email?: StringFilter<"Profile"> | string
    fullname?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    provider?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    projectsOwned?: ProjectListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    fullname?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    provider?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: UuidFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    ownerId?: UuidFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    members?: ProjectMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: ProfileOrderByWithRelationInput
    members?: ProjectMemberOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    ownerId?: UuidFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    members?: ProjectMemberListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    ownerId?: UuidWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: UuidFilter<"ProjectMember"> | string
    projectId?: UuidFilter<"ProjectMember"> | string
    userId?: UuidFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: ProfileOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectMemberProjectIdUserIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    projectId?: UuidFilter<"ProjectMember"> | string
    userId?: UuidFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "projectId_userId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProjectMember"> | string
    projectId?: UuidWithAggregatesFilter<"ProjectMember"> | string
    userId?: UuidWithAggregatesFilter<"ProjectMember"> | string
    role?: EnumRoleWithAggregatesFilter<"ProjectMember"> | $Enums.Role
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: UuidFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    assigneeId?: UuidNullableFilter<"Task"> | string | null
    projectId?: UuidFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignee?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignee?: ProfileOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    assigneeId?: UuidNullableFilter<"Task"> | string | null
    projectId?: UuidFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    assignee?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Task"> | $Enums.Status
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    assigneeId?: UuidNullableWithAggregatesFilter<"Task"> | string | null
    projectId?: UuidWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    taskId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    taskId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    userId?: UuidWithAggregatesFilter<"Comment"> | string
    taskId?: UuidWithAggregatesFilter<"Comment"> | string
    parentId?: UuidNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: UuidFilter<"Attachment"> | string
    fileUrl?: StringFilter<"Attachment"> | string
    taskId?: UuidFilter<"Attachment"> | string
    userId?: UuidFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    fileUrl?: StringFilter<"Attachment"> | string
    taskId?: UuidFilter<"Attachment"> | string
    userId?: UuidFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attachment"> | string
    fileUrl?: StringWithAggregatesFilter<"Attachment"> | string
    taskId?: UuidWithAggregatesFilter<"Attachment"> | string
    userId?: UuidWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: ProfileCreateNestedOneWithoutProjectsOwnedInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutProjectsOwnedNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    project: ProjectCreateNestedOneWithoutMembersInput
    user: ProfileCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    role?: $Enums.Role
  }

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
    user?: ProfileUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    role?: $Enums.Role
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignee?: ProfileCreateNestedOneWithoutTasksAssignedInput
    project: ProjectCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: ProfileUpdateOneWithoutTasksAssignedNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCommentsInput
    task: TaskCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    userId: string
    taskId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    userId: string
    taskId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutAttachmentsInput
    task: TaskCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    fileUrl: string
    taskId: string
    userId: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutAttachmentsNestedInput
    task?: TaskUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    fileUrl: string
    taskId: string
    userId: string
    createdAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullname?: SortOrder
    avatarUrl?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    projectId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    projectId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    projectId?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUserInput | AttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUserInput | AttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUserInput | AttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput> | AttachmentCreateWithoutUserInput[] | AttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutUserInput | AttachmentCreateOrConnectWithoutUserInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutUserInput | AttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttachmentCreateManyUserInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutUserInput | AttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutUserInput | AttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutProjectsOwnedInput = {
    create?: XOR<ProfileCreateWithoutProjectsOwnedInput, ProfileUncheckedCreateWithoutProjectsOwnedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectsOwnedInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutProjectsOwnedNestedInput = {
    create?: XOR<ProfileCreateWithoutProjectsOwnedInput, ProfileUncheckedCreateWithoutProjectsOwnedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectsOwnedInput
    upsert?: ProfileUpsertWithoutProjectsOwnedInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutProjectsOwnedInput, ProfileUpdateWithoutProjectsOwnedInput>, ProfileUncheckedUpdateWithoutProjectsOwnedInput>
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<ProfileCreateWithoutProjectMembersInput, ProfileUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectMembersInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProfileUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<ProfileCreateWithoutProjectMembersInput, ProfileUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectMembersInput
    upsert?: ProfileUpsertWithoutProjectMembersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutProjectMembersInput, ProfileUpdateWithoutProjectMembersInput>, ProfileUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ProfileCreateNestedOneWithoutTasksAssignedInput = {
    create?: XOR<ProfileCreateWithoutTasksAssignedInput, ProfileUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTasksAssignedInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileUpdateOneWithoutTasksAssignedNestedInput = {
    create?: XOR<ProfileCreateWithoutTasksAssignedInput, ProfileUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTasksAssignedInput
    upsert?: ProfileUpsertWithoutTasksAssignedInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutTasksAssignedInput, ProfileUpdateWithoutTasksAssignedInput>, ProfileUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type CommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTaskInput | AttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTaskInput | AttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTaskInput | AttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput> | AttachmentCreateWithoutTaskInput[] | AttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTaskInput | AttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTaskInput | AttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AttachmentCreateManyTaskInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTaskInput | AttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTaskInput | AttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutCommentsInput
    upsert?: ProfileUpsertWithoutCommentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutCommentsInput, ProfileUpdateWithoutCommentsInput>, ProfileUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAttachmentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAttachmentsInput
    upsert?: ProfileUpsertWithoutAttachmentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAttachmentsInput, ProfileUpdateWithoutAttachmentsInput>, ProfileUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TaskUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    upsert?: TaskUpsertWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAttachmentsInput, TaskUpdateWithoutAttachmentsInput>, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    role?: $Enums.Role
  }

  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    taskId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutUserInput = {
    id?: string
    fileUrl: string
    taskId: string
    createdAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput>
  }

  export type AttachmentCreateManyUserInputEnvelope = {
    data: AttachmentCreateManyUserInput | AttachmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: UuidFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    ownerId?: UuidFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: UuidFilter<"ProjectMember"> | string
    projectId?: UuidFilter<"ProjectMember"> | string
    userId?: UuidFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: UuidFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    assigneeId?: UuidNullableFilter<"Task"> | string | null
    projectId?: UuidFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    taskId?: UuidFilter<"Comment"> | string
    parentId?: UuidNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type AttachmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutUserInput, AttachmentUncheckedUpdateWithoutUserInput>
    create: XOR<AttachmentCreateWithoutUserInput, AttachmentUncheckedCreateWithoutUserInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutUserInput, AttachmentUncheckedUpdateWithoutUserInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutUserInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: UuidFilter<"Attachment"> | string
    fileUrl?: StringFilter<"Attachment"> | string
    taskId?: UuidFilter<"Attachment"> | string
    userId?: UuidFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type ProfileCreateWithoutProjectsOwnedInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutProjectsOwnedInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutProjectsOwnedInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutProjectsOwnedInput, ProfileUncheckedCreateWithoutProjectsOwnedInput>
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    role?: $Enums.Role
    user: ProfileCreateNestedOneWithoutProjectMembersInput
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignee?: ProfileCreateNestedOneWithoutTasksAssignedInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutProjectsOwnedInput = {
    update: XOR<ProfileUpdateWithoutProjectsOwnedInput, ProfileUncheckedUpdateWithoutProjectsOwnedInput>
    create: XOR<ProfileCreateWithoutProjectsOwnedInput, ProfileUncheckedCreateWithoutProjectsOwnedInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutProjectsOwnedInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutProjectsOwnedInput, ProfileUncheckedUpdateWithoutProjectsOwnedInput>
  }

  export type ProfileUpdateWithoutProjectsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutProjectsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: ProfileCreateNestedOneWithoutProjectsOwnedInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type ProfileCreateWithoutProjectMembersInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutProjectMembersInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutProjectMembersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutProjectMembersInput, ProfileUncheckedCreateWithoutProjectMembersInput>
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutProjectsOwnedNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProfileUpsertWithoutProjectMembersInput = {
    update: XOR<ProfileUpdateWithoutProjectMembersInput, ProfileUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<ProfileCreateWithoutProjectMembersInput, ProfileUncheckedCreateWithoutProjectMembersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutProjectMembersInput, ProfileUncheckedUpdateWithoutProjectMembersInput>
  }

  export type ProfileUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutTasksAssignedInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutTasksAssignedInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutTasksAssignedInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTasksAssignedInput, ProfileUncheckedCreateWithoutTasksAssignedInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: ProfileCreateNestedOneWithoutProjectsOwnedInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type CommentCreateWithoutTaskInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: CommentCreateManyTaskInput | CommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutTaskInput = {
    id?: string
    fileUrl: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutTaskInput = {
    id?: string
    fileUrl: string
    userId: string
    createdAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentCreateManyTaskInputEnvelope = {
    data: AttachmentCreateManyTaskInput | AttachmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutTasksAssignedInput = {
    update: XOR<ProfileUpdateWithoutTasksAssignedInput, ProfileUncheckedUpdateWithoutTasksAssignedInput>
    create: XOR<ProfileCreateWithoutTasksAssignedInput, ProfileUncheckedCreateWithoutTasksAssignedInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutTasksAssignedInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutTasksAssignedInput, ProfileUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type ProfileUpdateWithoutTasksAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTasksAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ProfileUpdateOneRequiredWithoutProjectsOwnedNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTaskInput, AttachmentUncheckedUpdateWithoutTaskInput>
    create: XOR<AttachmentCreateWithoutTaskInput, AttachmentUncheckedCreateWithoutTaskInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTaskInput, AttachmentUncheckedUpdateWithoutTaskInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTaskInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type ProfileCreateWithoutCommentsInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssigneeInput
    attachments?: AttachmentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutCommentsInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutCommentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
  }

  export type TaskCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignee?: ProfileCreateNestedOneWithoutTasksAssignedInput
    project: ProjectCreateNestedOneWithoutTasksInput
    attachments?: AttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCommentsInput
    task: TaskCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    userId: string
    taskId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: ProfileCreateNestedOneWithoutCommentsInput
    task: TaskCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    userId: string
    taskId: string
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutCommentsInput = {
    update: XOR<ProfileUpdateWithoutCommentsInput, ProfileUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProfileCreateWithoutCommentsInput, ProfileUncheckedCreateWithoutCommentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutCommentsInput, ProfileUncheckedUpdateWithoutCommentsInput>
  }

  export type ProfileUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssigneeNestedInput
    attachments?: AttachmentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: ProfileUpdateOneWithoutTasksAssignedNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type ProfileCreateWithoutAttachmentsInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutAttachmentsInput = {
    id: string
    email: string
    fullname?: string | null
    avatarUrl?: string | null
    provider?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutAttachmentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
  }

  export type TaskCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignee?: ProfileCreateNestedOneWithoutTasksAssignedInput
    project: ProjectCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAttachmentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
  }

  export type ProfileUpsertWithoutAttachmentsInput = {
    update: XOR<ProfileUpdateWithoutAttachmentsInput, ProfileUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAttachmentsInput, ProfileUncheckedUpdateWithoutAttachmentsInput>
  }

  export type ProfileUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutAttachmentsInput = {
    update: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TaskUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: ProfileUpdateOneWithoutTasksAssignedNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ProjectMemberCreateManyUserInput = {
    id?: string
    projectId: string
    role?: $Enums.Role
  }

  export type TaskCreateManyAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    projectId: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    taskId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type AttachmentCreateManyUserInput = {
    id?: string
    fileUrl: string
    taskId: string
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    projectId?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    userId: string
    role?: $Enums.Role
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.Status
    priority?: $Enums.Priority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: ProfileUpdateOneRequiredWithoutProjectMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: ProfileUpdateOneWithoutTasksAssignedNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyTaskInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type AttachmentCreateManyTaskInput = {
    id?: string
    fileUrl: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    content: string
    userId: string
    taskId: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutCommentsNestedInput
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}