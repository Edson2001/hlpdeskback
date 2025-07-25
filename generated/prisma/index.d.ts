
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model WidgetConfig
 * 
 */
export type WidgetConfig = $Result.DefaultSelection<Prisma.$WidgetConfigPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TicketAccessToken
 * 
 */
export type TicketAccessToken = $Result.DefaultSelection<Prisma.$TicketAccessTokenPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model OrganizationPlan
 * 
 */
export type OrganizationPlan = $Result.DefaultSelection<Prisma.$OrganizationPlanPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model MailServiceConfig
 * 
 */
export type MailServiceConfig = $Result.DefaultSelection<Prisma.$MailServiceConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  AGENT: 'AGENT',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TicketSource: {
  INTERNAL: 'INTERNAL',
  WIDGET: 'WIDGET',
  API: 'API',
  EMAIL: 'EMAIL',
  OTHER: 'OTHER'
};

export type TicketSource = (typeof TicketSource)[keyof typeof TicketSource]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TicketSource = $Enums.TicketSource

export const TicketSource: typeof $Enums.TicketSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.widgetConfig`: Exposes CRUD operations for the **WidgetConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WidgetConfigs
    * const widgetConfigs = await prisma.widgetConfig.findMany()
    * ```
    */
  get widgetConfig(): Prisma.WidgetConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketAccessToken`: Exposes CRUD operations for the **TicketAccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketAccessTokens
    * const ticketAccessTokens = await prisma.ticketAccessToken.findMany()
    * ```
    */
  get ticketAccessToken(): Prisma.TicketAccessTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationPlan`: Exposes CRUD operations for the **OrganizationPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationPlans
    * const organizationPlans = await prisma.organizationPlan.findMany()
    * ```
    */
  get organizationPlan(): Prisma.OrganizationPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mailServiceConfig`: Exposes CRUD operations for the **MailServiceConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MailServiceConfigs
    * const mailServiceConfigs = await prisma.mailServiceConfig.findMany()
    * ```
    */
  get mailServiceConfig(): Prisma.MailServiceConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Organization: 'Organization',
    WidgetConfig: 'WidgetConfig',
    User: 'User',
    TicketAccessToken: 'TicketAccessToken',
    Plan: 'Plan',
    OrganizationPlan: 'OrganizationPlan',
    Ticket: 'Ticket',
    Comment: 'Comment',
    Payment: 'Payment',
    MailServiceConfig: 'MailServiceConfig'
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
      modelProps: "organization" | "widgetConfig" | "user" | "ticketAccessToken" | "plan" | "organizationPlan" | "ticket" | "comment" | "payment" | "mailServiceConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      WidgetConfig: {
        payload: Prisma.$WidgetConfigPayload<ExtArgs>
        fields: Prisma.WidgetConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WidgetConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WidgetConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          findFirst: {
            args: Prisma.WidgetConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WidgetConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          findMany: {
            args: Prisma.WidgetConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>[]
          }
          create: {
            args: Prisma.WidgetConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          createMany: {
            args: Prisma.WidgetConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WidgetConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>[]
          }
          delete: {
            args: Prisma.WidgetConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          update: {
            args: Prisma.WidgetConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          deleteMany: {
            args: Prisma.WidgetConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WidgetConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WidgetConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>[]
          }
          upsert: {
            args: Prisma.WidgetConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetConfigPayload>
          }
          aggregate: {
            args: Prisma.WidgetConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWidgetConfig>
          }
          groupBy: {
            args: Prisma.WidgetConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<WidgetConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.WidgetConfigCountArgs<ExtArgs>
            result: $Utils.Optional<WidgetConfigCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TicketAccessToken: {
        payload: Prisma.$TicketAccessTokenPayload<ExtArgs>
        fields: Prisma.TicketAccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketAccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketAccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          findFirst: {
            args: Prisma.TicketAccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketAccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          findMany: {
            args: Prisma.TicketAccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>[]
          }
          create: {
            args: Prisma.TicketAccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          createMany: {
            args: Prisma.TicketAccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketAccessTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>[]
          }
          delete: {
            args: Prisma.TicketAccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          update: {
            args: Prisma.TicketAccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.TicketAccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketAccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketAccessTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>[]
          }
          upsert: {
            args: Prisma.TicketAccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketAccessTokenPayload>
          }
          aggregate: {
            args: Prisma.TicketAccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketAccessToken>
          }
          groupBy: {
            args: Prisma.TicketAccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketAccessTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketAccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<TicketAccessTokenCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      OrganizationPlan: {
        payload: Prisma.$OrganizationPlanPayload<ExtArgs>
        fields: Prisma.OrganizationPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          findFirst: {
            args: Prisma.OrganizationPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          findMany: {
            args: Prisma.OrganizationPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>[]
          }
          create: {
            args: Prisma.OrganizationPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          createMany: {
            args: Prisma.OrganizationPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>[]
          }
          delete: {
            args: Prisma.OrganizationPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          update: {
            args: Prisma.OrganizationPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPlanPayload>
          }
          aggregate: {
            args: Prisma.OrganizationPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationPlan>
          }
          groupBy: {
            args: Prisma.OrganizationPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationPlanCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationPlanCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
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
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      MailServiceConfig: {
        payload: Prisma.$MailServiceConfigPayload<ExtArgs>
        fields: Prisma.MailServiceConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MailServiceConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MailServiceConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          findFirst: {
            args: Prisma.MailServiceConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MailServiceConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          findMany: {
            args: Prisma.MailServiceConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>[]
          }
          create: {
            args: Prisma.MailServiceConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          createMany: {
            args: Prisma.MailServiceConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MailServiceConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>[]
          }
          delete: {
            args: Prisma.MailServiceConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          update: {
            args: Prisma.MailServiceConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          deleteMany: {
            args: Prisma.MailServiceConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MailServiceConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MailServiceConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>[]
          }
          upsert: {
            args: Prisma.MailServiceConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MailServiceConfigPayload>
          }
          aggregate: {
            args: Prisma.MailServiceConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMailServiceConfig>
          }
          groupBy: {
            args: Prisma.MailServiceConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<MailServiceConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.MailServiceConfigCountArgs<ExtArgs>
            result: $Utils.Optional<MailServiceConfigCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    organization?: OrganizationOmit
    widgetConfig?: WidgetConfigOmit
    user?: UserOmit
    ticketAccessToken?: TicketAccessTokenOmit
    plan?: PlanOmit
    organizationPlan?: OrganizationPlanOmit
    ticket?: TicketOmit
    comment?: CommentOmit
    payment?: PaymentOmit
    mailServiceConfig?: MailServiceConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    plans: number
    tickets: number
    widgetConfig: number
    OrganizationPlan: number
    payments: number
    mailServiceConfigs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    plans?: boolean | OrganizationCountOutputTypeCountPlansArgs
    tickets?: boolean | OrganizationCountOutputTypeCountTicketsArgs
    widgetConfig?: boolean | OrganizationCountOutputTypeCountWidgetConfigArgs
    OrganizationPlan?: boolean | OrganizationCountOutputTypeCountOrganizationPlanArgs
    payments?: boolean | OrganizationCountOutputTypeCountPaymentsArgs
    mailServiceConfigs?: boolean | OrganizationCountOutputTypeCountMailServiceConfigsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountWidgetConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetConfigWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountOrganizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationPlanWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMailServiceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailServiceConfigWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
    assigned: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    assigned?: boolean | UserCountOutputTypeCountAssignedArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    organizationPlans: number
    payments: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizationPlans?: boolean | PlanCountOutputTypeCountOrganizationPlansArgs
    payments?: boolean | PlanCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountOrganizationPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationPlanWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    comments: number
    ticketAccessTokens: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TicketCountOutputTypeCountCommentsArgs
    ticketAccessTokens?: boolean | TicketCountOutputTypeCountTicketAccessTokensArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTicketAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAccessTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    slug: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    slug: string | null
    phoneNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    slug: number
    phoneNumber: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slug?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slug?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slug?: true
    phoneNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    slug?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    plans?: boolean | Organization$plansArgs<ExtArgs>
    tickets?: boolean | Organization$ticketsArgs<ExtArgs>
    widgetConfig?: boolean | Organization$widgetConfigArgs<ExtArgs>
    OrganizationPlan?: boolean | Organization$OrganizationPlanArgs<ExtArgs>
    payments?: boolean | Organization$paymentsArgs<ExtArgs>
    mailServiceConfigs?: boolean | Organization$mailServiceConfigsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    slug?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    slug?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    slug?: boolean
    phoneNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "slug" | "phoneNumber" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    plans?: boolean | Organization$plansArgs<ExtArgs>
    tickets?: boolean | Organization$ticketsArgs<ExtArgs>
    widgetConfig?: boolean | Organization$widgetConfigArgs<ExtArgs>
    OrganizationPlan?: boolean | Organization$OrganizationPlanArgs<ExtArgs>
    payments?: boolean | Organization$paymentsArgs<ExtArgs>
    mailServiceConfigs?: boolean | Organization$mailServiceConfigsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      widgetConfig: Prisma.$WidgetConfigPayload<ExtArgs>[]
      OrganizationPlan: Prisma.$OrganizationPlanPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      mailServiceConfigs: Prisma.$MailServiceConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      slug: string
      phoneNumber: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Organization$plansArgs<ExtArgs> = {}>(args?: Subset<T, Organization$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Organization$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    widgetConfig<T extends Organization$widgetConfigArgs<ExtArgs> = {}>(args?: Subset<T, Organization$widgetConfigArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrganizationPlan<T extends Organization$OrganizationPlanArgs<ExtArgs> = {}>(args?: Subset<T, Organization$OrganizationPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Organization$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mailServiceConfigs<T extends Organization$mailServiceConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$mailServiceConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly slug: FieldRef<"Organization", 'String'>
    readonly phoneNumber: FieldRef<"Organization", 'String'>
    readonly isActive: FieldRef<"Organization", 'Boolean'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.plans
   */
  export type Organization$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Organization.tickets
   */
  export type Organization$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Organization.widgetConfig
   */
  export type Organization$widgetConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    where?: WidgetConfigWhereInput
    orderBy?: WidgetConfigOrderByWithRelationInput | WidgetConfigOrderByWithRelationInput[]
    cursor?: WidgetConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WidgetConfigScalarFieldEnum | WidgetConfigScalarFieldEnum[]
  }

  /**
   * Organization.OrganizationPlan
   */
  export type Organization$OrganizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    where?: OrganizationPlanWhereInput
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    cursor?: OrganizationPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationPlanScalarFieldEnum | OrganizationPlanScalarFieldEnum[]
  }

  /**
   * Organization.payments
   */
  export type Organization$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Organization.mailServiceConfigs
   */
  export type Organization$mailServiceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    where?: MailServiceConfigWhereInput
    orderBy?: MailServiceConfigOrderByWithRelationInput | MailServiceConfigOrderByWithRelationInput[]
    cursor?: MailServiceConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MailServiceConfigScalarFieldEnum | MailServiceConfigScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model WidgetConfig
   */

  export type AggregateWidgetConfig = {
    _count: WidgetConfigCountAggregateOutputType | null
    _min: WidgetConfigMinAggregateOutputType | null
    _max: WidgetConfigMaxAggregateOutputType | null
  }

  export type WidgetConfigMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    buttonText: string | null
    modalTitle: string | null
    buttonColor: string | null
    headerColor: string | null
    logoUrl: string | null
    showPriority: boolean | null
    theme: string | null
    successMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WidgetConfigMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    buttonText: string | null
    modalTitle: string | null
    buttonColor: string | null
    headerColor: string | null
    logoUrl: string | null
    showPriority: boolean | null
    theme: string | null
    successMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WidgetConfigCountAggregateOutputType = {
    id: number
    orgId: number
    buttonText: number
    modalTitle: number
    buttonColor: number
    headerColor: number
    logoUrl: number
    showPriority: number
    theme: number
    successMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WidgetConfigMinAggregateInputType = {
    id?: true
    orgId?: true
    buttonText?: true
    modalTitle?: true
    buttonColor?: true
    headerColor?: true
    logoUrl?: true
    showPriority?: true
    theme?: true
    successMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WidgetConfigMaxAggregateInputType = {
    id?: true
    orgId?: true
    buttonText?: true
    modalTitle?: true
    buttonColor?: true
    headerColor?: true
    logoUrl?: true
    showPriority?: true
    theme?: true
    successMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WidgetConfigCountAggregateInputType = {
    id?: true
    orgId?: true
    buttonText?: true
    modalTitle?: true
    buttonColor?: true
    headerColor?: true
    logoUrl?: true
    showPriority?: true
    theme?: true
    successMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WidgetConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetConfig to aggregate.
     */
    where?: WidgetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetConfigs to fetch.
     */
    orderBy?: WidgetConfigOrderByWithRelationInput | WidgetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WidgetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WidgetConfigs
    **/
    _count?: true | WidgetConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WidgetConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WidgetConfigMaxAggregateInputType
  }

  export type GetWidgetConfigAggregateType<T extends WidgetConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateWidgetConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidgetConfig[P]>
      : GetScalarType<T[P], AggregateWidgetConfig[P]>
  }




  export type WidgetConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetConfigWhereInput
    orderBy?: WidgetConfigOrderByWithAggregationInput | WidgetConfigOrderByWithAggregationInput[]
    by: WidgetConfigScalarFieldEnum[] | WidgetConfigScalarFieldEnum
    having?: WidgetConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WidgetConfigCountAggregateInputType | true
    _min?: WidgetConfigMinAggregateInputType
    _max?: WidgetConfigMaxAggregateInputType
  }

  export type WidgetConfigGroupByOutputType = {
    id: string
    orgId: string
    buttonText: string | null
    modalTitle: string | null
    buttonColor: string | null
    headerColor: string | null
    logoUrl: string | null
    showPriority: boolean
    theme: string | null
    successMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: WidgetConfigCountAggregateOutputType | null
    _min: WidgetConfigMinAggregateOutputType | null
    _max: WidgetConfigMaxAggregateOutputType | null
  }

  type GetWidgetConfigGroupByPayload<T extends WidgetConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WidgetConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WidgetConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WidgetConfigGroupByOutputType[P]>
            : GetScalarType<T[P], WidgetConfigGroupByOutputType[P]>
        }
      >
    >


  export type WidgetConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    buttonText?: boolean
    modalTitle?: boolean
    buttonColor?: boolean
    headerColor?: boolean
    logoUrl?: boolean
    showPriority?: boolean
    theme?: boolean
    successMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetConfig"]>

  export type WidgetConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    buttonText?: boolean
    modalTitle?: boolean
    buttonColor?: boolean
    headerColor?: boolean
    logoUrl?: boolean
    showPriority?: boolean
    theme?: boolean
    successMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetConfig"]>

  export type WidgetConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    buttonText?: boolean
    modalTitle?: boolean
    buttonColor?: boolean
    headerColor?: boolean
    logoUrl?: boolean
    showPriority?: boolean
    theme?: boolean
    successMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetConfig"]>

  export type WidgetConfigSelectScalar = {
    id?: boolean
    orgId?: boolean
    buttonText?: boolean
    modalTitle?: boolean
    buttonColor?: boolean
    headerColor?: boolean
    logoUrl?: boolean
    showPriority?: boolean
    theme?: boolean
    successMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WidgetConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "buttonText" | "modalTitle" | "buttonColor" | "headerColor" | "logoUrl" | "showPriority" | "theme" | "successMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["widgetConfig"]>
  export type WidgetConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type WidgetConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type WidgetConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $WidgetConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WidgetConfig"
    objects: {
      org: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      buttonText: string | null
      modalTitle: string | null
      buttonColor: string | null
      headerColor: string | null
      logoUrl: string | null
      showPriority: boolean
      theme: string | null
      successMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["widgetConfig"]>
    composites: {}
  }

  type WidgetConfigGetPayload<S extends boolean | null | undefined | WidgetConfigDefaultArgs> = $Result.GetResult<Prisma.$WidgetConfigPayload, S>

  type WidgetConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WidgetConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WidgetConfigCountAggregateInputType | true
    }

  export interface WidgetConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WidgetConfig'], meta: { name: 'WidgetConfig' } }
    /**
     * Find zero or one WidgetConfig that matches the filter.
     * @param {WidgetConfigFindUniqueArgs} args - Arguments to find a WidgetConfig
     * @example
     * // Get one WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WidgetConfigFindUniqueArgs>(args: SelectSubset<T, WidgetConfigFindUniqueArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WidgetConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WidgetConfigFindUniqueOrThrowArgs} args - Arguments to find a WidgetConfig
     * @example
     * // Get one WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WidgetConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, WidgetConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigFindFirstArgs} args - Arguments to find a WidgetConfig
     * @example
     * // Get one WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WidgetConfigFindFirstArgs>(args?: SelectSubset<T, WidgetConfigFindFirstArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigFindFirstOrThrowArgs} args - Arguments to find a WidgetConfig
     * @example
     * // Get one WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WidgetConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, WidgetConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WidgetConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WidgetConfigs
     * const widgetConfigs = await prisma.widgetConfig.findMany()
     * 
     * // Get first 10 WidgetConfigs
     * const widgetConfigs = await prisma.widgetConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const widgetConfigWithIdOnly = await prisma.widgetConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WidgetConfigFindManyArgs>(args?: SelectSubset<T, WidgetConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WidgetConfig.
     * @param {WidgetConfigCreateArgs} args - Arguments to create a WidgetConfig.
     * @example
     * // Create one WidgetConfig
     * const WidgetConfig = await prisma.widgetConfig.create({
     *   data: {
     *     // ... data to create a WidgetConfig
     *   }
     * })
     * 
     */
    create<T extends WidgetConfigCreateArgs>(args: SelectSubset<T, WidgetConfigCreateArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WidgetConfigs.
     * @param {WidgetConfigCreateManyArgs} args - Arguments to create many WidgetConfigs.
     * @example
     * // Create many WidgetConfigs
     * const widgetConfig = await prisma.widgetConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WidgetConfigCreateManyArgs>(args?: SelectSubset<T, WidgetConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WidgetConfigs and returns the data saved in the database.
     * @param {WidgetConfigCreateManyAndReturnArgs} args - Arguments to create many WidgetConfigs.
     * @example
     * // Create many WidgetConfigs
     * const widgetConfig = await prisma.widgetConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WidgetConfigs and only return the `id`
     * const widgetConfigWithIdOnly = await prisma.widgetConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WidgetConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, WidgetConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WidgetConfig.
     * @param {WidgetConfigDeleteArgs} args - Arguments to delete one WidgetConfig.
     * @example
     * // Delete one WidgetConfig
     * const WidgetConfig = await prisma.widgetConfig.delete({
     *   where: {
     *     // ... filter to delete one WidgetConfig
     *   }
     * })
     * 
     */
    delete<T extends WidgetConfigDeleteArgs>(args: SelectSubset<T, WidgetConfigDeleteArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WidgetConfig.
     * @param {WidgetConfigUpdateArgs} args - Arguments to update one WidgetConfig.
     * @example
     * // Update one WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WidgetConfigUpdateArgs>(args: SelectSubset<T, WidgetConfigUpdateArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WidgetConfigs.
     * @param {WidgetConfigDeleteManyArgs} args - Arguments to filter WidgetConfigs to delete.
     * @example
     * // Delete a few WidgetConfigs
     * const { count } = await prisma.widgetConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WidgetConfigDeleteManyArgs>(args?: SelectSubset<T, WidgetConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WidgetConfigs
     * const widgetConfig = await prisma.widgetConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WidgetConfigUpdateManyArgs>(args: SelectSubset<T, WidgetConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetConfigs and returns the data updated in the database.
     * @param {WidgetConfigUpdateManyAndReturnArgs} args - Arguments to update many WidgetConfigs.
     * @example
     * // Update many WidgetConfigs
     * const widgetConfig = await prisma.widgetConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WidgetConfigs and only return the `id`
     * const widgetConfigWithIdOnly = await prisma.widgetConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends WidgetConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, WidgetConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WidgetConfig.
     * @param {WidgetConfigUpsertArgs} args - Arguments to update or create a WidgetConfig.
     * @example
     * // Update or create a WidgetConfig
     * const widgetConfig = await prisma.widgetConfig.upsert({
     *   create: {
     *     // ... data to create a WidgetConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WidgetConfig we want to update
     *   }
     * })
     */
    upsert<T extends WidgetConfigUpsertArgs>(args: SelectSubset<T, WidgetConfigUpsertArgs<ExtArgs>>): Prisma__WidgetConfigClient<$Result.GetResult<Prisma.$WidgetConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WidgetConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigCountArgs} args - Arguments to filter WidgetConfigs to count.
     * @example
     * // Count the number of WidgetConfigs
     * const count = await prisma.widgetConfig.count({
     *   where: {
     *     // ... the filter for the WidgetConfigs we want to count
     *   }
     * })
    **/
    count<T extends WidgetConfigCountArgs>(
      args?: Subset<T, WidgetConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WidgetConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WidgetConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WidgetConfigAggregateArgs>(args: Subset<T, WidgetConfigAggregateArgs>): Prisma.PrismaPromise<GetWidgetConfigAggregateType<T>>

    /**
     * Group by WidgetConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetConfigGroupByArgs} args - Group by arguments.
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
      T extends WidgetConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WidgetConfigGroupByArgs['orderBy'] }
        : { orderBy?: WidgetConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WidgetConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WidgetConfig model
   */
  readonly fields: WidgetConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WidgetConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WidgetConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WidgetConfig model
   */
  interface WidgetConfigFieldRefs {
    readonly id: FieldRef<"WidgetConfig", 'String'>
    readonly orgId: FieldRef<"WidgetConfig", 'String'>
    readonly buttonText: FieldRef<"WidgetConfig", 'String'>
    readonly modalTitle: FieldRef<"WidgetConfig", 'String'>
    readonly buttonColor: FieldRef<"WidgetConfig", 'String'>
    readonly headerColor: FieldRef<"WidgetConfig", 'String'>
    readonly logoUrl: FieldRef<"WidgetConfig", 'String'>
    readonly showPriority: FieldRef<"WidgetConfig", 'Boolean'>
    readonly theme: FieldRef<"WidgetConfig", 'String'>
    readonly successMessage: FieldRef<"WidgetConfig", 'String'>
    readonly createdAt: FieldRef<"WidgetConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"WidgetConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WidgetConfig findUnique
   */
  export type WidgetConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter, which WidgetConfig to fetch.
     */
    where: WidgetConfigWhereUniqueInput
  }

  /**
   * WidgetConfig findUniqueOrThrow
   */
  export type WidgetConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter, which WidgetConfig to fetch.
     */
    where: WidgetConfigWhereUniqueInput
  }

  /**
   * WidgetConfig findFirst
   */
  export type WidgetConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter, which WidgetConfig to fetch.
     */
    where?: WidgetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetConfigs to fetch.
     */
    orderBy?: WidgetConfigOrderByWithRelationInput | WidgetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetConfigs.
     */
    cursor?: WidgetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetConfigs.
     */
    distinct?: WidgetConfigScalarFieldEnum | WidgetConfigScalarFieldEnum[]
  }

  /**
   * WidgetConfig findFirstOrThrow
   */
  export type WidgetConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter, which WidgetConfig to fetch.
     */
    where?: WidgetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetConfigs to fetch.
     */
    orderBy?: WidgetConfigOrderByWithRelationInput | WidgetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetConfigs.
     */
    cursor?: WidgetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetConfigs.
     */
    distinct?: WidgetConfigScalarFieldEnum | WidgetConfigScalarFieldEnum[]
  }

  /**
   * WidgetConfig findMany
   */
  export type WidgetConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter, which WidgetConfigs to fetch.
     */
    where?: WidgetConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetConfigs to fetch.
     */
    orderBy?: WidgetConfigOrderByWithRelationInput | WidgetConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WidgetConfigs.
     */
    cursor?: WidgetConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetConfigs.
     */
    skip?: number
    distinct?: WidgetConfigScalarFieldEnum | WidgetConfigScalarFieldEnum[]
  }

  /**
   * WidgetConfig create
   */
  export type WidgetConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a WidgetConfig.
     */
    data: XOR<WidgetConfigCreateInput, WidgetConfigUncheckedCreateInput>
  }

  /**
   * WidgetConfig createMany
   */
  export type WidgetConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WidgetConfigs.
     */
    data: WidgetConfigCreateManyInput | WidgetConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WidgetConfig createManyAndReturn
   */
  export type WidgetConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * The data used to create many WidgetConfigs.
     */
    data: WidgetConfigCreateManyInput | WidgetConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WidgetConfig update
   */
  export type WidgetConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a WidgetConfig.
     */
    data: XOR<WidgetConfigUpdateInput, WidgetConfigUncheckedUpdateInput>
    /**
     * Choose, which WidgetConfig to update.
     */
    where: WidgetConfigWhereUniqueInput
  }

  /**
   * WidgetConfig updateMany
   */
  export type WidgetConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WidgetConfigs.
     */
    data: XOR<WidgetConfigUpdateManyMutationInput, WidgetConfigUncheckedUpdateManyInput>
    /**
     * Filter which WidgetConfigs to update
     */
    where?: WidgetConfigWhereInput
    /**
     * Limit how many WidgetConfigs to update.
     */
    limit?: number
  }

  /**
   * WidgetConfig updateManyAndReturn
   */
  export type WidgetConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * The data used to update WidgetConfigs.
     */
    data: XOR<WidgetConfigUpdateManyMutationInput, WidgetConfigUncheckedUpdateManyInput>
    /**
     * Filter which WidgetConfigs to update
     */
    where?: WidgetConfigWhereInput
    /**
     * Limit how many WidgetConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WidgetConfig upsert
   */
  export type WidgetConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the WidgetConfig to update in case it exists.
     */
    where: WidgetConfigWhereUniqueInput
    /**
     * In case the WidgetConfig found by the `where` argument doesn't exist, create a new WidgetConfig with this data.
     */
    create: XOR<WidgetConfigCreateInput, WidgetConfigUncheckedCreateInput>
    /**
     * In case the WidgetConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WidgetConfigUpdateInput, WidgetConfigUncheckedUpdateInput>
  }

  /**
   * WidgetConfig delete
   */
  export type WidgetConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
    /**
     * Filter which WidgetConfig to delete.
     */
    where: WidgetConfigWhereUniqueInput
  }

  /**
   * WidgetConfig deleteMany
   */
  export type WidgetConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetConfigs to delete
     */
    where?: WidgetConfigWhereInput
    /**
     * Limit how many WidgetConfigs to delete.
     */
    limit?: number
  }

  /**
   * WidgetConfig without action
   */
  export type WidgetConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetConfig
     */
    select?: WidgetConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetConfig
     */
    omit?: WidgetConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetConfigInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    enable: boolean | null
    password: string | null
    organizationId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    enable: boolean | null
    password: string | null
    organizationId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    enable: number
    password: number
    organizationId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    enable?: true
    password?: true
    organizationId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    enable?: true
    password?: true
    organizationId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    enable?: true
    password?: true
    organizationId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.Role
    enable: boolean | null
    password: string
    organizationId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    enable?: boolean
    password?: boolean
    organizationId?: boolean
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    assigned?: boolean | User$assignedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    enable?: boolean
    password?: boolean
    organizationId?: boolean
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    enable?: boolean
    password?: boolean
    organizationId?: boolean
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    enable?: boolean
    password?: boolean
    organizationId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "enable" | "password" | "organizationId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    assigned?: boolean | User$assignedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      assigned: Prisma.$TicketPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.Role
      enable: boolean | null
      password: string
      organizationId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned<T extends User$assignedArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Organization<T extends User$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly enable: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.assigned
   */
  export type User$assignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.Organization
   */
  export type User$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TicketAccessToken
   */

  export type AggregateTicketAccessToken = {
    _count: TicketAccessTokenCountAggregateOutputType | null
    _min: TicketAccessTokenMinAggregateOutputType | null
    _max: TicketAccessTokenMaxAggregateOutputType | null
  }

  export type TicketAccessTokenMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TicketAccessTokenMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TicketAccessTokenCountAggregateOutputType = {
    id: number
    ticketId: number
    token: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type TicketAccessTokenMinAggregateInputType = {
    id?: true
    ticketId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TicketAccessTokenMaxAggregateInputType = {
    id?: true
    ticketId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TicketAccessTokenCountAggregateInputType = {
    id?: true
    ticketId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type TicketAccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAccessToken to aggregate.
     */
    where?: TicketAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAccessTokens to fetch.
     */
    orderBy?: TicketAccessTokenOrderByWithRelationInput | TicketAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketAccessTokens
    **/
    _count?: true | TicketAccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketAccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketAccessTokenMaxAggregateInputType
  }

  export type GetTicketAccessTokenAggregateType<T extends TicketAccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketAccessToken[P]>
      : GetScalarType<T[P], AggregateTicketAccessToken[P]>
  }




  export type TicketAccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketAccessTokenWhereInput
    orderBy?: TicketAccessTokenOrderByWithAggregationInput | TicketAccessTokenOrderByWithAggregationInput[]
    by: TicketAccessTokenScalarFieldEnum[] | TicketAccessTokenScalarFieldEnum
    having?: TicketAccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketAccessTokenCountAggregateInputType | true
    _min?: TicketAccessTokenMinAggregateInputType
    _max?: TicketAccessTokenMaxAggregateInputType
  }

  export type TicketAccessTokenGroupByOutputType = {
    id: string
    ticketId: string
    token: string
    createdAt: Date
    expiresAt: Date | null
    _count: TicketAccessTokenCountAggregateOutputType | null
    _min: TicketAccessTokenMinAggregateOutputType | null
    _max: TicketAccessTokenMaxAggregateOutputType | null
  }

  type GetTicketAccessTokenGroupByPayload<T extends TicketAccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketAccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketAccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketAccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], TicketAccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type TicketAccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAccessToken"]>

  export type TicketAccessTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAccessToken"]>

  export type TicketAccessTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketAccessToken"]>

  export type TicketAccessTokenSelectScalar = {
    id?: boolean
    ticketId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type TicketAccessTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "token" | "createdAt" | "expiresAt", ExtArgs["result"]["ticketAccessToken"]>
  export type TicketAccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketAccessTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type TicketAccessTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketAccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketAccessToken"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      token: string
      createdAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["ticketAccessToken"]>
    composites: {}
  }

  type TicketAccessTokenGetPayload<S extends boolean | null | undefined | TicketAccessTokenDefaultArgs> = $Result.GetResult<Prisma.$TicketAccessTokenPayload, S>

  type TicketAccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketAccessTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketAccessTokenCountAggregateInputType | true
    }

  export interface TicketAccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketAccessToken'], meta: { name: 'TicketAccessToken' } }
    /**
     * Find zero or one TicketAccessToken that matches the filter.
     * @param {TicketAccessTokenFindUniqueArgs} args - Arguments to find a TicketAccessToken
     * @example
     * // Get one TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketAccessTokenFindUniqueArgs>(args: SelectSubset<T, TicketAccessTokenFindUniqueArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketAccessToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketAccessTokenFindUniqueOrThrowArgs} args - Arguments to find a TicketAccessToken
     * @example
     * // Get one TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketAccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketAccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenFindFirstArgs} args - Arguments to find a TicketAccessToken
     * @example
     * // Get one TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketAccessTokenFindFirstArgs>(args?: SelectSubset<T, TicketAccessTokenFindFirstArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketAccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenFindFirstOrThrowArgs} args - Arguments to find a TicketAccessToken
     * @example
     * // Get one TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketAccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketAccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketAccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketAccessTokens
     * const ticketAccessTokens = await prisma.ticketAccessToken.findMany()
     * 
     * // Get first 10 TicketAccessTokens
     * const ticketAccessTokens = await prisma.ticketAccessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketAccessTokenWithIdOnly = await prisma.ticketAccessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketAccessTokenFindManyArgs>(args?: SelectSubset<T, TicketAccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketAccessToken.
     * @param {TicketAccessTokenCreateArgs} args - Arguments to create a TicketAccessToken.
     * @example
     * // Create one TicketAccessToken
     * const TicketAccessToken = await prisma.ticketAccessToken.create({
     *   data: {
     *     // ... data to create a TicketAccessToken
     *   }
     * })
     * 
     */
    create<T extends TicketAccessTokenCreateArgs>(args: SelectSubset<T, TicketAccessTokenCreateArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketAccessTokens.
     * @param {TicketAccessTokenCreateManyArgs} args - Arguments to create many TicketAccessTokens.
     * @example
     * // Create many TicketAccessTokens
     * const ticketAccessToken = await prisma.ticketAccessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketAccessTokenCreateManyArgs>(args?: SelectSubset<T, TicketAccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketAccessTokens and returns the data saved in the database.
     * @param {TicketAccessTokenCreateManyAndReturnArgs} args - Arguments to create many TicketAccessTokens.
     * @example
     * // Create many TicketAccessTokens
     * const ticketAccessToken = await prisma.ticketAccessToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketAccessTokens and only return the `id`
     * const ticketAccessTokenWithIdOnly = await prisma.ticketAccessToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketAccessTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketAccessTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketAccessToken.
     * @param {TicketAccessTokenDeleteArgs} args - Arguments to delete one TicketAccessToken.
     * @example
     * // Delete one TicketAccessToken
     * const TicketAccessToken = await prisma.ticketAccessToken.delete({
     *   where: {
     *     // ... filter to delete one TicketAccessToken
     *   }
     * })
     * 
     */
    delete<T extends TicketAccessTokenDeleteArgs>(args: SelectSubset<T, TicketAccessTokenDeleteArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketAccessToken.
     * @param {TicketAccessTokenUpdateArgs} args - Arguments to update one TicketAccessToken.
     * @example
     * // Update one TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketAccessTokenUpdateArgs>(args: SelectSubset<T, TicketAccessTokenUpdateArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketAccessTokens.
     * @param {TicketAccessTokenDeleteManyArgs} args - Arguments to filter TicketAccessTokens to delete.
     * @example
     * // Delete a few TicketAccessTokens
     * const { count } = await prisma.ticketAccessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketAccessTokenDeleteManyArgs>(args?: SelectSubset<T, TicketAccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketAccessTokens
     * const ticketAccessToken = await prisma.ticketAccessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketAccessTokenUpdateManyArgs>(args: SelectSubset<T, TicketAccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketAccessTokens and returns the data updated in the database.
     * @param {TicketAccessTokenUpdateManyAndReturnArgs} args - Arguments to update many TicketAccessTokens.
     * @example
     * // Update many TicketAccessTokens
     * const ticketAccessToken = await prisma.ticketAccessToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketAccessTokens and only return the `id`
     * const ticketAccessTokenWithIdOnly = await prisma.ticketAccessToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketAccessTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketAccessTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketAccessToken.
     * @param {TicketAccessTokenUpsertArgs} args - Arguments to update or create a TicketAccessToken.
     * @example
     * // Update or create a TicketAccessToken
     * const ticketAccessToken = await prisma.ticketAccessToken.upsert({
     *   create: {
     *     // ... data to create a TicketAccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketAccessToken we want to update
     *   }
     * })
     */
    upsert<T extends TicketAccessTokenUpsertArgs>(args: SelectSubset<T, TicketAccessTokenUpsertArgs<ExtArgs>>): Prisma__TicketAccessTokenClient<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenCountArgs} args - Arguments to filter TicketAccessTokens to count.
     * @example
     * // Count the number of TicketAccessTokens
     * const count = await prisma.ticketAccessToken.count({
     *   where: {
     *     // ... the filter for the TicketAccessTokens we want to count
     *   }
     * })
    **/
    count<T extends TicketAccessTokenCountArgs>(
      args?: Subset<T, TicketAccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketAccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAccessTokenAggregateArgs>(args: Subset<T, TicketAccessTokenAggregateArgs>): Prisma.PrismaPromise<GetTicketAccessTokenAggregateType<T>>

    /**
     * Group by TicketAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAccessTokenGroupByArgs} args - Group by arguments.
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
      T extends TicketAccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketAccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: TicketAccessTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketAccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketAccessToken model
   */
  readonly fields: TicketAccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketAccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketAccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketAccessToken model
   */
  interface TicketAccessTokenFieldRefs {
    readonly id: FieldRef<"TicketAccessToken", 'String'>
    readonly ticketId: FieldRef<"TicketAccessToken", 'String'>
    readonly token: FieldRef<"TicketAccessToken", 'String'>
    readonly createdAt: FieldRef<"TicketAccessToken", 'DateTime'>
    readonly expiresAt: FieldRef<"TicketAccessToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketAccessToken findUnique
   */
  export type TicketAccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which TicketAccessToken to fetch.
     */
    where: TicketAccessTokenWhereUniqueInput
  }

  /**
   * TicketAccessToken findUniqueOrThrow
   */
  export type TicketAccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which TicketAccessToken to fetch.
     */
    where: TicketAccessTokenWhereUniqueInput
  }

  /**
   * TicketAccessToken findFirst
   */
  export type TicketAccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which TicketAccessToken to fetch.
     */
    where?: TicketAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAccessTokens to fetch.
     */
    orderBy?: TicketAccessTokenOrderByWithRelationInput | TicketAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAccessTokens.
     */
    cursor?: TicketAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAccessTokens.
     */
    distinct?: TicketAccessTokenScalarFieldEnum | TicketAccessTokenScalarFieldEnum[]
  }

  /**
   * TicketAccessToken findFirstOrThrow
   */
  export type TicketAccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which TicketAccessToken to fetch.
     */
    where?: TicketAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAccessTokens to fetch.
     */
    orderBy?: TicketAccessTokenOrderByWithRelationInput | TicketAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketAccessTokens.
     */
    cursor?: TicketAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketAccessTokens.
     */
    distinct?: TicketAccessTokenScalarFieldEnum | TicketAccessTokenScalarFieldEnum[]
  }

  /**
   * TicketAccessToken findMany
   */
  export type TicketAccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which TicketAccessTokens to fetch.
     */
    where?: TicketAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketAccessTokens to fetch.
     */
    orderBy?: TicketAccessTokenOrderByWithRelationInput | TicketAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketAccessTokens.
     */
    cursor?: TicketAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketAccessTokens.
     */
    skip?: number
    distinct?: TicketAccessTokenScalarFieldEnum | TicketAccessTokenScalarFieldEnum[]
  }

  /**
   * TicketAccessToken create
   */
  export type TicketAccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketAccessToken.
     */
    data: XOR<TicketAccessTokenCreateInput, TicketAccessTokenUncheckedCreateInput>
  }

  /**
   * TicketAccessToken createMany
   */
  export type TicketAccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketAccessTokens.
     */
    data: TicketAccessTokenCreateManyInput | TicketAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketAccessToken createManyAndReturn
   */
  export type TicketAccessTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to create many TicketAccessTokens.
     */
    data: TicketAccessTokenCreateManyInput | TicketAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAccessToken update
   */
  export type TicketAccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketAccessToken.
     */
    data: XOR<TicketAccessTokenUpdateInput, TicketAccessTokenUncheckedUpdateInput>
    /**
     * Choose, which TicketAccessToken to update.
     */
    where: TicketAccessTokenWhereUniqueInput
  }

  /**
   * TicketAccessToken updateMany
   */
  export type TicketAccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketAccessTokens.
     */
    data: XOR<TicketAccessTokenUpdateManyMutationInput, TicketAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which TicketAccessTokens to update
     */
    where?: TicketAccessTokenWhereInput
    /**
     * Limit how many TicketAccessTokens to update.
     */
    limit?: number
  }

  /**
   * TicketAccessToken updateManyAndReturn
   */
  export type TicketAccessTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to update TicketAccessTokens.
     */
    data: XOR<TicketAccessTokenUpdateManyMutationInput, TicketAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which TicketAccessTokens to update
     */
    where?: TicketAccessTokenWhereInput
    /**
     * Limit how many TicketAccessTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketAccessToken upsert
   */
  export type TicketAccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketAccessToken to update in case it exists.
     */
    where: TicketAccessTokenWhereUniqueInput
    /**
     * In case the TicketAccessToken found by the `where` argument doesn't exist, create a new TicketAccessToken with this data.
     */
    create: XOR<TicketAccessTokenCreateInput, TicketAccessTokenUncheckedCreateInput>
    /**
     * In case the TicketAccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketAccessTokenUpdateInput, TicketAccessTokenUncheckedUpdateInput>
  }

  /**
   * TicketAccessToken delete
   */
  export type TicketAccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    /**
     * Filter which TicketAccessToken to delete.
     */
    where: TicketAccessTokenWhereUniqueInput
  }

  /**
   * TicketAccessToken deleteMany
   */
  export type TicketAccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketAccessTokens to delete
     */
    where?: TicketAccessTokenWhereInput
    /**
     * Limit how many TicketAccessTokens to delete.
     */
    limit?: number
  }

  /**
   * TicketAccessToken without action
   */
  export type TicketAccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    monthlyPrice: number | null
    annualPrice: number | null
    durationMonths: number | null
  }

  export type PlanSumAggregateOutputType = {
    monthlyPrice: number | null
    annualPrice: number | null
    durationMonths: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    title: string | null
    monthlyPrice: number | null
    annualPrice: number | null
    durationMonths: number | null
    description: string | null
    buttonText: string | null
    highlight: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    title: string | null
    monthlyPrice: number | null
    annualPrice: number | null
    durationMonths: number | null
    description: string | null
    buttonText: string | null
    highlight: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    title: number
    monthlyPrice: number
    annualPrice: number
    durationMonths: number
    description: number
    features: number
    buttonText: number
    highlight: number
    isActive: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    monthlyPrice?: true
    annualPrice?: true
    durationMonths?: true
  }

  export type PlanSumAggregateInputType = {
    monthlyPrice?: true
    annualPrice?: true
    durationMonths?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    title?: true
    monthlyPrice?: true
    annualPrice?: true
    durationMonths?: true
    description?: true
    buttonText?: true
    highlight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    title?: true
    monthlyPrice?: true
    annualPrice?: true
    durationMonths?: true
    description?: true
    buttonText?: true
    highlight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    title?: true
    monthlyPrice?: true
    annualPrice?: true
    durationMonths?: true
    description?: true
    features?: true
    buttonText?: true
    highlight?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths: number
    description: string
    features: string[]
    buttonText: string
    highlight: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    organizationId: string | null
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    monthlyPrice?: boolean
    annualPrice?: boolean
    durationMonths?: boolean
    description?: boolean
    features?: boolean
    buttonText?: boolean
    highlight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organizationPlans?: boolean | Plan$organizationPlansArgs<ExtArgs>
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
    payments?: boolean | Plan$paymentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    monthlyPrice?: boolean
    annualPrice?: boolean
    durationMonths?: boolean
    description?: boolean
    features?: boolean
    buttonText?: boolean
    highlight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    monthlyPrice?: boolean
    annualPrice?: boolean
    durationMonths?: boolean
    description?: boolean
    features?: boolean
    buttonText?: boolean
    highlight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    title?: boolean
    monthlyPrice?: boolean
    annualPrice?: boolean
    durationMonths?: boolean
    description?: boolean
    features?: boolean
    buttonText?: boolean
    highlight?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "monthlyPrice" | "annualPrice" | "durationMonths" | "description" | "features" | "buttonText" | "highlight" | "isActive" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizationPlans?: boolean | Plan$organizationPlansArgs<ExtArgs>
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
    payments?: boolean | Plan$paymentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Plan$OrganizationArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      organizationPlans: Prisma.$OrganizationPlanPayload<ExtArgs>[]
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      monthlyPrice: number
      annualPrice: number
      durationMonths: number
      description: string
      features: string[]
      buttonText: string
      highlight: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      organizationId: string | null
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizationPlans<T extends Plan$organizationPlansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$organizationPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Organization<T extends Plan$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Plan$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Plan$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly title: FieldRef<"Plan", 'String'>
    readonly monthlyPrice: FieldRef<"Plan", 'Float'>
    readonly annualPrice: FieldRef<"Plan", 'Float'>
    readonly durationMonths: FieldRef<"Plan", 'Int'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly features: FieldRef<"Plan", 'String[]'>
    readonly buttonText: FieldRef<"Plan", 'String'>
    readonly highlight: FieldRef<"Plan", 'Boolean'>
    readonly isActive: FieldRef<"Plan", 'Boolean'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
    readonly organizationId: FieldRef<"Plan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.organizationPlans
   */
  export type Plan$organizationPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    where?: OrganizationPlanWhereInput
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    cursor?: OrganizationPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationPlanScalarFieldEnum | OrganizationPlanScalarFieldEnum[]
  }

  /**
   * Plan.Organization
   */
  export type Plan$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Plan.payments
   */
  export type Plan$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationPlan
   */

  export type AggregateOrganizationPlan = {
    _count: OrganizationPlanCountAggregateOutputType | null
    _min: OrganizationPlanMinAggregateOutputType | null
    _max: OrganizationPlanMaxAggregateOutputType | null
  }

  export type OrganizationPlanMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    planId: string | null
    startDate: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    paymentId: string | null
  }

  export type OrganizationPlanMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    planId: string | null
    startDate: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    paymentId: string | null
  }

  export type OrganizationPlanCountAggregateOutputType = {
    id: number
    organizationId: number
    planId: number
    startDate: number
    expiresAt: number
    isActive: number
    paymentId: number
    _all: number
  }


  export type OrganizationPlanMinAggregateInputType = {
    id?: true
    organizationId?: true
    planId?: true
    startDate?: true
    expiresAt?: true
    isActive?: true
    paymentId?: true
  }

  export type OrganizationPlanMaxAggregateInputType = {
    id?: true
    organizationId?: true
    planId?: true
    startDate?: true
    expiresAt?: true
    isActive?: true
    paymentId?: true
  }

  export type OrganizationPlanCountAggregateInputType = {
    id?: true
    organizationId?: true
    planId?: true
    startDate?: true
    expiresAt?: true
    isActive?: true
    paymentId?: true
    _all?: true
  }

  export type OrganizationPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationPlan to aggregate.
     */
    where?: OrganizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationPlans to fetch.
     */
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationPlans
    **/
    _count?: true | OrganizationPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationPlanMaxAggregateInputType
  }

  export type GetOrganizationPlanAggregateType<T extends OrganizationPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationPlan[P]>
      : GetScalarType<T[P], AggregateOrganizationPlan[P]>
  }




  export type OrganizationPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationPlanWhereInput
    orderBy?: OrganizationPlanOrderByWithAggregationInput | OrganizationPlanOrderByWithAggregationInput[]
    by: OrganizationPlanScalarFieldEnum[] | OrganizationPlanScalarFieldEnum
    having?: OrganizationPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationPlanCountAggregateInputType | true
    _min?: OrganizationPlanMinAggregateInputType
    _max?: OrganizationPlanMaxAggregateInputType
  }

  export type OrganizationPlanGroupByOutputType = {
    id: string
    organizationId: string
    planId: string
    startDate: Date
    expiresAt: Date
    isActive: boolean
    paymentId: string | null
    _count: OrganizationPlanCountAggregateOutputType | null
    _min: OrganizationPlanMinAggregateOutputType | null
    _max: OrganizationPlanMaxAggregateOutputType | null
  }

  type GetOrganizationPlanGroupByPayload<T extends OrganizationPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationPlanGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationPlanGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    planId?: boolean
    startDate?: boolean
    expiresAt?: boolean
    isActive?: boolean
    paymentId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["organizationPlan"]>

  export type OrganizationPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    planId?: boolean
    startDate?: boolean
    expiresAt?: boolean
    isActive?: boolean
    paymentId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["organizationPlan"]>

  export type OrganizationPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    planId?: boolean
    startDate?: boolean
    expiresAt?: boolean
    isActive?: boolean
    paymentId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["organizationPlan"]>

  export type OrganizationPlanSelectScalar = {
    id?: boolean
    organizationId?: boolean
    planId?: boolean
    startDate?: boolean
    expiresAt?: boolean
    isActive?: boolean
    paymentId?: boolean
  }

  export type OrganizationPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "planId" | "startDate" | "expiresAt" | "isActive" | "paymentId", ExtArgs["result"]["organizationPlan"]>
  export type OrganizationPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }
  export type OrganizationPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }
  export type OrganizationPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payment?: boolean | OrganizationPlan$paymentArgs<ExtArgs>
  }

  export type $OrganizationPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationPlan"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      planId: string
      startDate: Date
      expiresAt: Date
      isActive: boolean
      paymentId: string | null
    }, ExtArgs["result"]["organizationPlan"]>
    composites: {}
  }

  type OrganizationPlanGetPayload<S extends boolean | null | undefined | OrganizationPlanDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPlanPayload, S>

  type OrganizationPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationPlanCountAggregateInputType | true
    }

  export interface OrganizationPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationPlan'], meta: { name: 'OrganizationPlan' } }
    /**
     * Find zero or one OrganizationPlan that matches the filter.
     * @param {OrganizationPlanFindUniqueArgs} args - Arguments to find a OrganizationPlan
     * @example
     * // Get one OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationPlanFindUniqueArgs>(args: SelectSubset<T, OrganizationPlanFindUniqueArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationPlanFindUniqueOrThrowArgs} args - Arguments to find a OrganizationPlan
     * @example
     * // Get one OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanFindFirstArgs} args - Arguments to find a OrganizationPlan
     * @example
     * // Get one OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationPlanFindFirstArgs>(args?: SelectSubset<T, OrganizationPlanFindFirstArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanFindFirstOrThrowArgs} args - Arguments to find a OrganizationPlan
     * @example
     * // Get one OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationPlans
     * const organizationPlans = await prisma.organizationPlan.findMany()
     * 
     * // Get first 10 OrganizationPlans
     * const organizationPlans = await prisma.organizationPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationPlanWithIdOnly = await prisma.organizationPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationPlanFindManyArgs>(args?: SelectSubset<T, OrganizationPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationPlan.
     * @param {OrganizationPlanCreateArgs} args - Arguments to create a OrganizationPlan.
     * @example
     * // Create one OrganizationPlan
     * const OrganizationPlan = await prisma.organizationPlan.create({
     *   data: {
     *     // ... data to create a OrganizationPlan
     *   }
     * })
     * 
     */
    create<T extends OrganizationPlanCreateArgs>(args: SelectSubset<T, OrganizationPlanCreateArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationPlans.
     * @param {OrganizationPlanCreateManyArgs} args - Arguments to create many OrganizationPlans.
     * @example
     * // Create many OrganizationPlans
     * const organizationPlan = await prisma.organizationPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationPlanCreateManyArgs>(args?: SelectSubset<T, OrganizationPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationPlans and returns the data saved in the database.
     * @param {OrganizationPlanCreateManyAndReturnArgs} args - Arguments to create many OrganizationPlans.
     * @example
     * // Create many OrganizationPlans
     * const organizationPlan = await prisma.organizationPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationPlans and only return the `id`
     * const organizationPlanWithIdOnly = await prisma.organizationPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationPlan.
     * @param {OrganizationPlanDeleteArgs} args - Arguments to delete one OrganizationPlan.
     * @example
     * // Delete one OrganizationPlan
     * const OrganizationPlan = await prisma.organizationPlan.delete({
     *   where: {
     *     // ... filter to delete one OrganizationPlan
     *   }
     * })
     * 
     */
    delete<T extends OrganizationPlanDeleteArgs>(args: SelectSubset<T, OrganizationPlanDeleteArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationPlan.
     * @param {OrganizationPlanUpdateArgs} args - Arguments to update one OrganizationPlan.
     * @example
     * // Update one OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationPlanUpdateArgs>(args: SelectSubset<T, OrganizationPlanUpdateArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationPlans.
     * @param {OrganizationPlanDeleteManyArgs} args - Arguments to filter OrganizationPlans to delete.
     * @example
     * // Delete a few OrganizationPlans
     * const { count } = await prisma.organizationPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationPlanDeleteManyArgs>(args?: SelectSubset<T, OrganizationPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationPlans
     * const organizationPlan = await prisma.organizationPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationPlanUpdateManyArgs>(args: SelectSubset<T, OrganizationPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationPlans and returns the data updated in the database.
     * @param {OrganizationPlanUpdateManyAndReturnArgs} args - Arguments to update many OrganizationPlans.
     * @example
     * // Update many OrganizationPlans
     * const organizationPlan = await prisma.organizationPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationPlans and only return the `id`
     * const organizationPlanWithIdOnly = await prisma.organizationPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationPlan.
     * @param {OrganizationPlanUpsertArgs} args - Arguments to update or create a OrganizationPlan.
     * @example
     * // Update or create a OrganizationPlan
     * const organizationPlan = await prisma.organizationPlan.upsert({
     *   create: {
     *     // ... data to create a OrganizationPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationPlan we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationPlanUpsertArgs>(args: SelectSubset<T, OrganizationPlanUpsertArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanCountArgs} args - Arguments to filter OrganizationPlans to count.
     * @example
     * // Count the number of OrganizationPlans
     * const count = await prisma.organizationPlan.count({
     *   where: {
     *     // ... the filter for the OrganizationPlans we want to count
     *   }
     * })
    **/
    count<T extends OrganizationPlanCountArgs>(
      args?: Subset<T, OrganizationPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationPlanAggregateArgs>(args: Subset<T, OrganizationPlanAggregateArgs>): Prisma.PrismaPromise<GetOrganizationPlanAggregateType<T>>

    /**
     * Group by OrganizationPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationPlanGroupByArgs} args - Group by arguments.
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
      T extends OrganizationPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationPlanGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationPlan model
   */
  readonly fields: OrganizationPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends OrganizationPlan$paymentArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationPlan$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrganizationPlan model
   */
  interface OrganizationPlanFieldRefs {
    readonly id: FieldRef<"OrganizationPlan", 'String'>
    readonly organizationId: FieldRef<"OrganizationPlan", 'String'>
    readonly planId: FieldRef<"OrganizationPlan", 'String'>
    readonly startDate: FieldRef<"OrganizationPlan", 'DateTime'>
    readonly expiresAt: FieldRef<"OrganizationPlan", 'DateTime'>
    readonly isActive: FieldRef<"OrganizationPlan", 'Boolean'>
    readonly paymentId: FieldRef<"OrganizationPlan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationPlan findUnique
   */
  export type OrganizationPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationPlan to fetch.
     */
    where: OrganizationPlanWhereUniqueInput
  }

  /**
   * OrganizationPlan findUniqueOrThrow
   */
  export type OrganizationPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationPlan to fetch.
     */
    where: OrganizationPlanWhereUniqueInput
  }

  /**
   * OrganizationPlan findFirst
   */
  export type OrganizationPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationPlan to fetch.
     */
    where?: OrganizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationPlans to fetch.
     */
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationPlans.
     */
    cursor?: OrganizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationPlans.
     */
    distinct?: OrganizationPlanScalarFieldEnum | OrganizationPlanScalarFieldEnum[]
  }

  /**
   * OrganizationPlan findFirstOrThrow
   */
  export type OrganizationPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationPlan to fetch.
     */
    where?: OrganizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationPlans to fetch.
     */
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationPlans.
     */
    cursor?: OrganizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationPlans.
     */
    distinct?: OrganizationPlanScalarFieldEnum | OrganizationPlanScalarFieldEnum[]
  }

  /**
   * OrganizationPlan findMany
   */
  export type OrganizationPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationPlans to fetch.
     */
    where?: OrganizationPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationPlans to fetch.
     */
    orderBy?: OrganizationPlanOrderByWithRelationInput | OrganizationPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationPlans.
     */
    cursor?: OrganizationPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationPlans.
     */
    skip?: number
    distinct?: OrganizationPlanScalarFieldEnum | OrganizationPlanScalarFieldEnum[]
  }

  /**
   * OrganizationPlan create
   */
  export type OrganizationPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationPlan.
     */
    data: XOR<OrganizationPlanCreateInput, OrganizationPlanUncheckedCreateInput>
  }

  /**
   * OrganizationPlan createMany
   */
  export type OrganizationPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationPlans.
     */
    data: OrganizationPlanCreateManyInput | OrganizationPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationPlan createManyAndReturn
   */
  export type OrganizationPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationPlans.
     */
    data: OrganizationPlanCreateManyInput | OrganizationPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationPlan update
   */
  export type OrganizationPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationPlan.
     */
    data: XOR<OrganizationPlanUpdateInput, OrganizationPlanUncheckedUpdateInput>
    /**
     * Choose, which OrganizationPlan to update.
     */
    where: OrganizationPlanWhereUniqueInput
  }

  /**
   * OrganizationPlan updateMany
   */
  export type OrganizationPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationPlans.
     */
    data: XOR<OrganizationPlanUpdateManyMutationInput, OrganizationPlanUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationPlans to update
     */
    where?: OrganizationPlanWhereInput
    /**
     * Limit how many OrganizationPlans to update.
     */
    limit?: number
  }

  /**
   * OrganizationPlan updateManyAndReturn
   */
  export type OrganizationPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationPlans.
     */
    data: XOR<OrganizationPlanUpdateManyMutationInput, OrganizationPlanUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationPlans to update
     */
    where?: OrganizationPlanWhereInput
    /**
     * Limit how many OrganizationPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationPlan upsert
   */
  export type OrganizationPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationPlan to update in case it exists.
     */
    where: OrganizationPlanWhereUniqueInput
    /**
     * In case the OrganizationPlan found by the `where` argument doesn't exist, create a new OrganizationPlan with this data.
     */
    create: XOR<OrganizationPlanCreateInput, OrganizationPlanUncheckedCreateInput>
    /**
     * In case the OrganizationPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationPlanUpdateInput, OrganizationPlanUncheckedUpdateInput>
  }

  /**
   * OrganizationPlan delete
   */
  export type OrganizationPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    /**
     * Filter which OrganizationPlan to delete.
     */
    where: OrganizationPlanWhereUniqueInput
  }

  /**
   * OrganizationPlan deleteMany
   */
  export type OrganizationPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationPlans to delete
     */
    where?: OrganizationPlanWhereInput
    /**
     * Limit how many OrganizationPlans to delete.
     */
    limit?: number
  }

  /**
   * OrganizationPlan.payment
   */
  export type OrganizationPlan$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * OrganizationPlan without action
   */
  export type OrganizationPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    slaDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    source: $Enums.TicketSource | null
    createdById: string | null
    assignedToId: string | null
    externalName: string | null
    externalEmail: string | null
    organizationId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.TicketStatus | null
    priority: $Enums.TicketPriority | null
    slaDeadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    source: $Enums.TicketSource | null
    createdById: string | null
    assignedToId: string | null
    externalName: string | null
    externalEmail: string | null
    organizationId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    slaDeadline: number
    createdAt: number
    updatedAt: number
    source: number
    createdById: number
    assignedToId: number
    externalName: number
    externalEmail: number
    organizationId: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    slaDeadline?: true
    createdAt?: true
    updatedAt?: true
    source?: true
    createdById?: true
    assignedToId?: true
    externalName?: true
    externalEmail?: true
    organizationId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    slaDeadline?: true
    createdAt?: true
    updatedAt?: true
    source?: true
    createdById?: true
    assignedToId?: true
    externalName?: true
    externalEmail?: true
    organizationId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    slaDeadline?: true
    createdAt?: true
    updatedAt?: true
    source?: true
    createdById?: true
    assignedToId?: true
    externalName?: true
    externalEmail?: true
    organizationId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date
    createdAt: Date
    updatedAt: Date
    source: $Enums.TicketSource | null
    createdById: string | null
    assignedToId: string | null
    externalName: string | null
    externalEmail: string | null
    organizationId: string | null
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    slaDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean
    createdById?: boolean
    assignedToId?: boolean
    externalName?: boolean
    externalEmail?: boolean
    organizationId?: boolean
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    ticketAccessTokens?: boolean | Ticket$ticketAccessTokensArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    slaDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean
    createdById?: boolean
    assignedToId?: boolean
    externalName?: boolean
    externalEmail?: boolean
    organizationId?: boolean
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    slaDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean
    createdById?: boolean
    assignedToId?: boolean
    externalName?: boolean
    externalEmail?: boolean
    organizationId?: boolean
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    slaDeadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    source?: boolean
    createdById?: boolean
    assignedToId?: boolean
    externalName?: boolean
    externalEmail?: boolean
    organizationId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "slaDeadline" | "createdAt" | "updatedAt" | "source" | "createdById" | "assignedToId" | "externalName" | "externalEmail" | "organizationId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    comments?: boolean | Ticket$commentsArgs<ExtArgs>
    ticketAccessTokens?: boolean | Ticket$ticketAccessTokensArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Ticket$createdByArgs<ExtArgs>
    assignedTo?: boolean | Ticket$assignedToArgs<ExtArgs>
    organization?: boolean | Ticket$organizationArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      ticketAccessTokens: Prisma.$TicketAccessTokenPayload<ExtArgs>[]
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.TicketStatus
      priority: $Enums.TicketPriority
      slaDeadline: Date
      createdAt: Date
      updatedAt: Date
      source: $Enums.TicketSource | null
      createdById: string | null
      assignedToId: string | null
      externalName: string | null
      externalEmail: string | null
      organizationId: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Ticket$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Ticket$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Ticket$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketAccessTokens<T extends Ticket$ticketAccessTokensArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketAccessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends Ticket$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly slaDeadline: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly source: FieldRef<"Ticket", 'TicketSource'>
    readonly createdById: FieldRef<"Ticket", 'String'>
    readonly assignedToId: FieldRef<"Ticket", 'String'>
    readonly externalName: FieldRef<"Ticket", 'String'>
    readonly externalEmail: FieldRef<"Ticket", 'String'>
    readonly organizationId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.createdBy
   */
  export type Ticket$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.assignedTo
   */
  export type Ticket$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.comments
   */
  export type Ticket$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Ticket.ticketAccessTokens
   */
  export type Ticket$ticketAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketAccessToken
     */
    select?: TicketAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketAccessToken
     */
    omit?: TicketAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketAccessTokenInclude<ExtArgs> | null
    where?: TicketAccessTokenWhereInput
    orderBy?: TicketAccessTokenOrderByWithRelationInput | TicketAccessTokenOrderByWithRelationInput[]
    cursor?: TicketAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketAccessTokenScalarFieldEnum | TicketAccessTokenScalarFieldEnum[]
  }

  /**
   * Ticket.organization
   */
  export type Ticket$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
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
    createdAt: Date | null
    ticketId: string | null
    authorId: string | null
    isImage: boolean | null
    externalName: string | null
    externalEmail: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    ticketId: string | null
    authorId: string | null
    isImage: boolean | null
    externalName: string | null
    externalEmail: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    ticketId: number
    authorId: number
    isImage: number
    externalName: number
    externalEmail: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    ticketId?: true
    authorId?: true
    isImage?: true
    externalName?: true
    externalEmail?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    ticketId?: true
    authorId?: true
    isImage?: true
    externalName?: true
    externalEmail?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    ticketId?: true
    authorId?: true
    isImage?: true
    externalName?: true
    externalEmail?: true
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
    createdAt: Date
    ticketId: string
    authorId: string | null
    isImage: boolean | null
    externalName: string | null
    externalEmail: string | null
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
    createdAt?: boolean
    ticketId?: boolean
    authorId?: boolean
    isImage?: boolean
    externalName?: boolean
    externalEmail?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    ticketId?: boolean
    authorId?: boolean
    isImage?: boolean
    externalName?: boolean
    externalEmail?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    ticketId?: boolean
    authorId?: boolean
    isImage?: boolean
    externalName?: boolean
    externalEmail?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    ticketId?: boolean
    authorId?: boolean
    isImage?: boolean
    externalName?: boolean
    externalEmail?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "ticketId" | "authorId" | "isImage" | "externalName" | "externalEmail", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      ticketId: string
      authorId: string | null
      isImage: boolean | null
      externalName: string | null
      externalEmail: string | null
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
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends Comment$authorArgs<ExtArgs> = {}>(args?: Subset<T, Comment$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly ticketId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly isImage: FieldRef<"Comment", 'Boolean'>
    readonly externalName: FieldRef<"Comment", 'String'>
    readonly externalEmail: FieldRef<"Comment", 'String'>
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
   * Comment.author
   */
  export type Comment$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
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
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    paymentReference: string | null
    organizationId: string | null
    planId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    paymentReference: string | null
    organizationId: string | null
    planId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    paymentReference: number
    organizationId: number
    planId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    paymentReference?: true
    organizationId?: true
    planId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    paymentReference?: true
    organizationId?: true
    planId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    paymentReference?: true
    organizationId?: true
    planId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    paymentReference: string
    organizationId: string
    planId: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentReference?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    organizationPlan?: boolean | Payment$organizationPlanArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentReference?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentReference?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    paymentReference?: boolean
    organizationId?: boolean
    planId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentReference" | "organizationId" | "planId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    organizationPlan?: boolean | Payment$organizationPlanArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      organizationPlan: Prisma.$OrganizationPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentReference: string
      organizationId: string
      planId: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizationPlan<T extends Payment$organizationPlanArgs<ExtArgs> = {}>(args?: Subset<T, Payment$organizationPlanArgs<ExtArgs>>): Prisma__OrganizationPlanClient<$Result.GetResult<Prisma.$OrganizationPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly paymentReference: FieldRef<"Payment", 'String'>
    readonly organizationId: FieldRef<"Payment", 'String'>
    readonly planId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.organizationPlan
   */
  export type Payment$organizationPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationPlan
     */
    select?: OrganizationPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationPlan
     */
    omit?: OrganizationPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationPlanInclude<ExtArgs> | null
    where?: OrganizationPlanWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model MailServiceConfig
   */

  export type AggregateMailServiceConfig = {
    _count: MailServiceConfigCountAggregateOutputType | null
    _avg: MailServiceConfigAvgAggregateOutputType | null
    _sum: MailServiceConfigSumAggregateOutputType | null
    _min: MailServiceConfigMinAggregateOutputType | null
    _max: MailServiceConfigMaxAggregateOutputType | null
  }

  export type MailServiceConfigAvgAggregateOutputType = {
    port: number | null
  }

  export type MailServiceConfigSumAggregateOutputType = {
    port: number | null
  }

  export type MailServiceConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    serviceType: string | null
    host: string | null
    port: number | null
    user: string | null
    password: string | null
    tls: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type MailServiceConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serviceType: string | null
    host: string | null
    port: number | null
    user: string | null
    password: string | null
    tls: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type MailServiceConfigCountAggregateOutputType = {
    id: number
    name: number
    serviceType: number
    host: number
    port: number
    user: number
    password: number
    tls: number
    isActive: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type MailServiceConfigAvgAggregateInputType = {
    port?: true
  }

  export type MailServiceConfigSumAggregateInputType = {
    port?: true
  }

  export type MailServiceConfigMinAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    host?: true
    port?: true
    user?: true
    password?: true
    tls?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type MailServiceConfigMaxAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    host?: true
    port?: true
    user?: true
    password?: true
    tls?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type MailServiceConfigCountAggregateInputType = {
    id?: true
    name?: true
    serviceType?: true
    host?: true
    port?: true
    user?: true
    password?: true
    tls?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type MailServiceConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailServiceConfig to aggregate.
     */
    where?: MailServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailServiceConfigs to fetch.
     */
    orderBy?: MailServiceConfigOrderByWithRelationInput | MailServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MailServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MailServiceConfigs
    **/
    _count?: true | MailServiceConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MailServiceConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MailServiceConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MailServiceConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MailServiceConfigMaxAggregateInputType
  }

  export type GetMailServiceConfigAggregateType<T extends MailServiceConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateMailServiceConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMailServiceConfig[P]>
      : GetScalarType<T[P], AggregateMailServiceConfig[P]>
  }




  export type MailServiceConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MailServiceConfigWhereInput
    orderBy?: MailServiceConfigOrderByWithAggregationInput | MailServiceConfigOrderByWithAggregationInput[]
    by: MailServiceConfigScalarFieldEnum[] | MailServiceConfigScalarFieldEnum
    having?: MailServiceConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MailServiceConfigCountAggregateInputType | true
    _avg?: MailServiceConfigAvgAggregateInputType
    _sum?: MailServiceConfigSumAggregateInputType
    _min?: MailServiceConfigMinAggregateInputType
    _max?: MailServiceConfigMaxAggregateInputType
  }

  export type MailServiceConfigGroupByOutputType = {
    id: string
    name: string
    serviceType: string
    host: string
    port: number
    user: string
    password: string
    tls: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    organizationId: string | null
    _count: MailServiceConfigCountAggregateOutputType | null
    _avg: MailServiceConfigAvgAggregateOutputType | null
    _sum: MailServiceConfigSumAggregateOutputType | null
    _min: MailServiceConfigMinAggregateOutputType | null
    _max: MailServiceConfigMaxAggregateOutputType | null
  }

  type GetMailServiceConfigGroupByPayload<T extends MailServiceConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MailServiceConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MailServiceConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MailServiceConfigGroupByOutputType[P]>
            : GetScalarType<T[P], MailServiceConfigGroupByOutputType[P]>
        }
      >
    >


  export type MailServiceConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    password?: boolean
    tls?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["mailServiceConfig"]>

  export type MailServiceConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    password?: boolean
    tls?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["mailServiceConfig"]>

  export type MailServiceConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serviceType?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    password?: boolean
    tls?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["mailServiceConfig"]>

  export type MailServiceConfigSelectScalar = {
    id?: boolean
    name?: boolean
    serviceType?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    password?: boolean
    tls?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type MailServiceConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serviceType" | "host" | "port" | "user" | "password" | "tls" | "isActive" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["mailServiceConfig"]>
  export type MailServiceConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }
  export type MailServiceConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }
  export type MailServiceConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | MailServiceConfig$organizationArgs<ExtArgs>
  }

  export type $MailServiceConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MailServiceConfig"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serviceType: string
      host: string
      port: number
      user: string
      password: string
      tls: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      organizationId: string | null
    }, ExtArgs["result"]["mailServiceConfig"]>
    composites: {}
  }

  type MailServiceConfigGetPayload<S extends boolean | null | undefined | MailServiceConfigDefaultArgs> = $Result.GetResult<Prisma.$MailServiceConfigPayload, S>

  type MailServiceConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MailServiceConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MailServiceConfigCountAggregateInputType | true
    }

  export interface MailServiceConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MailServiceConfig'], meta: { name: 'MailServiceConfig' } }
    /**
     * Find zero or one MailServiceConfig that matches the filter.
     * @param {MailServiceConfigFindUniqueArgs} args - Arguments to find a MailServiceConfig
     * @example
     * // Get one MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MailServiceConfigFindUniqueArgs>(args: SelectSubset<T, MailServiceConfigFindUniqueArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MailServiceConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MailServiceConfigFindUniqueOrThrowArgs} args - Arguments to find a MailServiceConfig
     * @example
     * // Get one MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MailServiceConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, MailServiceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailServiceConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigFindFirstArgs} args - Arguments to find a MailServiceConfig
     * @example
     * // Get one MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MailServiceConfigFindFirstArgs>(args?: SelectSubset<T, MailServiceConfigFindFirstArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MailServiceConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigFindFirstOrThrowArgs} args - Arguments to find a MailServiceConfig
     * @example
     * // Get one MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MailServiceConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, MailServiceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MailServiceConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MailServiceConfigs
     * const mailServiceConfigs = await prisma.mailServiceConfig.findMany()
     * 
     * // Get first 10 MailServiceConfigs
     * const mailServiceConfigs = await prisma.mailServiceConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mailServiceConfigWithIdOnly = await prisma.mailServiceConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MailServiceConfigFindManyArgs>(args?: SelectSubset<T, MailServiceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MailServiceConfig.
     * @param {MailServiceConfigCreateArgs} args - Arguments to create a MailServiceConfig.
     * @example
     * // Create one MailServiceConfig
     * const MailServiceConfig = await prisma.mailServiceConfig.create({
     *   data: {
     *     // ... data to create a MailServiceConfig
     *   }
     * })
     * 
     */
    create<T extends MailServiceConfigCreateArgs>(args: SelectSubset<T, MailServiceConfigCreateArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MailServiceConfigs.
     * @param {MailServiceConfigCreateManyArgs} args - Arguments to create many MailServiceConfigs.
     * @example
     * // Create many MailServiceConfigs
     * const mailServiceConfig = await prisma.mailServiceConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MailServiceConfigCreateManyArgs>(args?: SelectSubset<T, MailServiceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MailServiceConfigs and returns the data saved in the database.
     * @param {MailServiceConfigCreateManyAndReturnArgs} args - Arguments to create many MailServiceConfigs.
     * @example
     * // Create many MailServiceConfigs
     * const mailServiceConfig = await prisma.mailServiceConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MailServiceConfigs and only return the `id`
     * const mailServiceConfigWithIdOnly = await prisma.mailServiceConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MailServiceConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, MailServiceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MailServiceConfig.
     * @param {MailServiceConfigDeleteArgs} args - Arguments to delete one MailServiceConfig.
     * @example
     * // Delete one MailServiceConfig
     * const MailServiceConfig = await prisma.mailServiceConfig.delete({
     *   where: {
     *     // ... filter to delete one MailServiceConfig
     *   }
     * })
     * 
     */
    delete<T extends MailServiceConfigDeleteArgs>(args: SelectSubset<T, MailServiceConfigDeleteArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MailServiceConfig.
     * @param {MailServiceConfigUpdateArgs} args - Arguments to update one MailServiceConfig.
     * @example
     * // Update one MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MailServiceConfigUpdateArgs>(args: SelectSubset<T, MailServiceConfigUpdateArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MailServiceConfigs.
     * @param {MailServiceConfigDeleteManyArgs} args - Arguments to filter MailServiceConfigs to delete.
     * @example
     * // Delete a few MailServiceConfigs
     * const { count } = await prisma.mailServiceConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MailServiceConfigDeleteManyArgs>(args?: SelectSubset<T, MailServiceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailServiceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MailServiceConfigs
     * const mailServiceConfig = await prisma.mailServiceConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MailServiceConfigUpdateManyArgs>(args: SelectSubset<T, MailServiceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MailServiceConfigs and returns the data updated in the database.
     * @param {MailServiceConfigUpdateManyAndReturnArgs} args - Arguments to update many MailServiceConfigs.
     * @example
     * // Update many MailServiceConfigs
     * const mailServiceConfig = await prisma.mailServiceConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MailServiceConfigs and only return the `id`
     * const mailServiceConfigWithIdOnly = await prisma.mailServiceConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends MailServiceConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, MailServiceConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MailServiceConfig.
     * @param {MailServiceConfigUpsertArgs} args - Arguments to update or create a MailServiceConfig.
     * @example
     * // Update or create a MailServiceConfig
     * const mailServiceConfig = await prisma.mailServiceConfig.upsert({
     *   create: {
     *     // ... data to create a MailServiceConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MailServiceConfig we want to update
     *   }
     * })
     */
    upsert<T extends MailServiceConfigUpsertArgs>(args: SelectSubset<T, MailServiceConfigUpsertArgs<ExtArgs>>): Prisma__MailServiceConfigClient<$Result.GetResult<Prisma.$MailServiceConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MailServiceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigCountArgs} args - Arguments to filter MailServiceConfigs to count.
     * @example
     * // Count the number of MailServiceConfigs
     * const count = await prisma.mailServiceConfig.count({
     *   where: {
     *     // ... the filter for the MailServiceConfigs we want to count
     *   }
     * })
    **/
    count<T extends MailServiceConfigCountArgs>(
      args?: Subset<T, MailServiceConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MailServiceConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MailServiceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MailServiceConfigAggregateArgs>(args: Subset<T, MailServiceConfigAggregateArgs>): Prisma.PrismaPromise<GetMailServiceConfigAggregateType<T>>

    /**
     * Group by MailServiceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MailServiceConfigGroupByArgs} args - Group by arguments.
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
      T extends MailServiceConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MailServiceConfigGroupByArgs['orderBy'] }
        : { orderBy?: MailServiceConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MailServiceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMailServiceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MailServiceConfig model
   */
  readonly fields: MailServiceConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MailServiceConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MailServiceConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends MailServiceConfig$organizationArgs<ExtArgs> = {}>(args?: Subset<T, MailServiceConfig$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MailServiceConfig model
   */
  interface MailServiceConfigFieldRefs {
    readonly id: FieldRef<"MailServiceConfig", 'String'>
    readonly name: FieldRef<"MailServiceConfig", 'String'>
    readonly serviceType: FieldRef<"MailServiceConfig", 'String'>
    readonly host: FieldRef<"MailServiceConfig", 'String'>
    readonly port: FieldRef<"MailServiceConfig", 'Int'>
    readonly user: FieldRef<"MailServiceConfig", 'String'>
    readonly password: FieldRef<"MailServiceConfig", 'String'>
    readonly tls: FieldRef<"MailServiceConfig", 'Boolean'>
    readonly isActive: FieldRef<"MailServiceConfig", 'Boolean'>
    readonly createdAt: FieldRef<"MailServiceConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"MailServiceConfig", 'DateTime'>
    readonly organizationId: FieldRef<"MailServiceConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MailServiceConfig findUnique
   */
  export type MailServiceConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which MailServiceConfig to fetch.
     */
    where: MailServiceConfigWhereUniqueInput
  }

  /**
   * MailServiceConfig findUniqueOrThrow
   */
  export type MailServiceConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which MailServiceConfig to fetch.
     */
    where: MailServiceConfigWhereUniqueInput
  }

  /**
   * MailServiceConfig findFirst
   */
  export type MailServiceConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which MailServiceConfig to fetch.
     */
    where?: MailServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailServiceConfigs to fetch.
     */
    orderBy?: MailServiceConfigOrderByWithRelationInput | MailServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailServiceConfigs.
     */
    cursor?: MailServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailServiceConfigs.
     */
    distinct?: MailServiceConfigScalarFieldEnum | MailServiceConfigScalarFieldEnum[]
  }

  /**
   * MailServiceConfig findFirstOrThrow
   */
  export type MailServiceConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which MailServiceConfig to fetch.
     */
    where?: MailServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailServiceConfigs to fetch.
     */
    orderBy?: MailServiceConfigOrderByWithRelationInput | MailServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MailServiceConfigs.
     */
    cursor?: MailServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MailServiceConfigs.
     */
    distinct?: MailServiceConfigScalarFieldEnum | MailServiceConfigScalarFieldEnum[]
  }

  /**
   * MailServiceConfig findMany
   */
  export type MailServiceConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which MailServiceConfigs to fetch.
     */
    where?: MailServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MailServiceConfigs to fetch.
     */
    orderBy?: MailServiceConfigOrderByWithRelationInput | MailServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MailServiceConfigs.
     */
    cursor?: MailServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MailServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MailServiceConfigs.
     */
    skip?: number
    distinct?: MailServiceConfigScalarFieldEnum | MailServiceConfigScalarFieldEnum[]
  }

  /**
   * MailServiceConfig create
   */
  export type MailServiceConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a MailServiceConfig.
     */
    data: XOR<MailServiceConfigCreateInput, MailServiceConfigUncheckedCreateInput>
  }

  /**
   * MailServiceConfig createMany
   */
  export type MailServiceConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MailServiceConfigs.
     */
    data: MailServiceConfigCreateManyInput | MailServiceConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MailServiceConfig createManyAndReturn
   */
  export type MailServiceConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * The data used to create many MailServiceConfigs.
     */
    data: MailServiceConfigCreateManyInput | MailServiceConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MailServiceConfig update
   */
  export type MailServiceConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a MailServiceConfig.
     */
    data: XOR<MailServiceConfigUpdateInput, MailServiceConfigUncheckedUpdateInput>
    /**
     * Choose, which MailServiceConfig to update.
     */
    where: MailServiceConfigWhereUniqueInput
  }

  /**
   * MailServiceConfig updateMany
   */
  export type MailServiceConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MailServiceConfigs.
     */
    data: XOR<MailServiceConfigUpdateManyMutationInput, MailServiceConfigUncheckedUpdateManyInput>
    /**
     * Filter which MailServiceConfigs to update
     */
    where?: MailServiceConfigWhereInput
    /**
     * Limit how many MailServiceConfigs to update.
     */
    limit?: number
  }

  /**
   * MailServiceConfig updateManyAndReturn
   */
  export type MailServiceConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * The data used to update MailServiceConfigs.
     */
    data: XOR<MailServiceConfigUpdateManyMutationInput, MailServiceConfigUncheckedUpdateManyInput>
    /**
     * Filter which MailServiceConfigs to update
     */
    where?: MailServiceConfigWhereInput
    /**
     * Limit how many MailServiceConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MailServiceConfig upsert
   */
  export type MailServiceConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the MailServiceConfig to update in case it exists.
     */
    where: MailServiceConfigWhereUniqueInput
    /**
     * In case the MailServiceConfig found by the `where` argument doesn't exist, create a new MailServiceConfig with this data.
     */
    create: XOR<MailServiceConfigCreateInput, MailServiceConfigUncheckedCreateInput>
    /**
     * In case the MailServiceConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MailServiceConfigUpdateInput, MailServiceConfigUncheckedUpdateInput>
  }

  /**
   * MailServiceConfig delete
   */
  export type MailServiceConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
    /**
     * Filter which MailServiceConfig to delete.
     */
    where: MailServiceConfigWhereUniqueInput
  }

  /**
   * MailServiceConfig deleteMany
   */
  export type MailServiceConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MailServiceConfigs to delete
     */
    where?: MailServiceConfigWhereInput
    /**
     * Limit how many MailServiceConfigs to delete.
     */
    limit?: number
  }

  /**
   * MailServiceConfig.organization
   */
  export type MailServiceConfig$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * MailServiceConfig without action
   */
  export type MailServiceConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MailServiceConfig
     */
    select?: MailServiceConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MailServiceConfig
     */
    omit?: MailServiceConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MailServiceConfigInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    slug: 'slug',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const WidgetConfigScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    buttonText: 'buttonText',
    modalTitle: 'modalTitle',
    buttonColor: 'buttonColor',
    headerColor: 'headerColor',
    logoUrl: 'logoUrl',
    showPriority: 'showPriority',
    theme: 'theme',
    successMessage: 'successMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WidgetConfigScalarFieldEnum = (typeof WidgetConfigScalarFieldEnum)[keyof typeof WidgetConfigScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    enable: 'enable',
    password: 'password',
    organizationId: 'organizationId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TicketAccessTokenScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type TicketAccessTokenScalarFieldEnum = (typeof TicketAccessTokenScalarFieldEnum)[keyof typeof TicketAccessTokenScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    monthlyPrice: 'monthlyPrice',
    annualPrice: 'annualPrice',
    durationMonths: 'durationMonths',
    description: 'description',
    features: 'features',
    buttonText: 'buttonText',
    highlight: 'highlight',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const OrganizationPlanScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    planId: 'planId',
    startDate: 'startDate',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    paymentId: 'paymentId'
  };

  export type OrganizationPlanScalarFieldEnum = (typeof OrganizationPlanScalarFieldEnum)[keyof typeof OrganizationPlanScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    slaDeadline: 'slaDeadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    source: 'source',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    externalName: 'externalName',
    externalEmail: 'externalEmail',
    organizationId: 'organizationId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    ticketId: 'ticketId',
    authorId: 'authorId',
    isImage: 'isImage',
    externalName: 'externalName',
    externalEmail: 'externalEmail'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    paymentReference: 'paymentReference',
    organizationId: 'organizationId',
    planId: 'planId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const MailServiceConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serviceType: 'serviceType',
    host: 'host',
    port: 'port',
    user: 'user',
    password: 'password',
    tls: 'tls',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type MailServiceConfigScalarFieldEnum = (typeof MailServiceConfigScalarFieldEnum)[keyof typeof MailServiceConfigScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketSource'
   */
  export type EnumTicketSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketSource'>
    


  /**
   * Reference to a field of type 'TicketSource[]'
   */
  export type ListEnumTicketSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketSource[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    slug?: StringFilter<"Organization"> | string
    phoneNumber?: StringFilter<"Organization"> | string
    isActive?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    plans?: PlanListRelationFilter
    tickets?: TicketListRelationFilter
    widgetConfig?: WidgetConfigListRelationFilter
    OrganizationPlan?: OrganizationPlanListRelationFilter
    payments?: PaymentListRelationFilter
    mailServiceConfigs?: MailServiceConfigListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slug?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    widgetConfig?: WidgetConfigOrderByRelationAggregateInput
    OrganizationPlan?: OrganizationPlanOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    mailServiceConfigs?: MailServiceConfigOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    phoneNumber?: StringFilter<"Organization"> | string
    isActive?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    plans?: PlanListRelationFilter
    tickets?: TicketListRelationFilter
    widgetConfig?: WidgetConfigListRelationFilter
    OrganizationPlan?: OrganizationPlanListRelationFilter
    payments?: PaymentListRelationFilter
    mailServiceConfigs?: MailServiceConfigListRelationFilter
  }, "id" | "slug">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slug?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringWithAggregatesFilter<"Organization"> | string
    slug?: StringWithAggregatesFilter<"Organization"> | string
    phoneNumber?: StringWithAggregatesFilter<"Organization"> | string
    isActive?: BoolWithAggregatesFilter<"Organization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type WidgetConfigWhereInput = {
    AND?: WidgetConfigWhereInput | WidgetConfigWhereInput[]
    OR?: WidgetConfigWhereInput[]
    NOT?: WidgetConfigWhereInput | WidgetConfigWhereInput[]
    id?: StringFilter<"WidgetConfig"> | string
    orgId?: StringFilter<"WidgetConfig"> | string
    buttonText?: StringNullableFilter<"WidgetConfig"> | string | null
    modalTitle?: StringNullableFilter<"WidgetConfig"> | string | null
    buttonColor?: StringNullableFilter<"WidgetConfig"> | string | null
    headerColor?: StringNullableFilter<"WidgetConfig"> | string | null
    logoUrl?: StringNullableFilter<"WidgetConfig"> | string | null
    showPriority?: BoolFilter<"WidgetConfig"> | boolean
    theme?: StringNullableFilter<"WidgetConfig"> | string | null
    successMessage?: StringNullableFilter<"WidgetConfig"> | string | null
    createdAt?: DateTimeFilter<"WidgetConfig"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetConfig"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type WidgetConfigOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    buttonText?: SortOrderInput | SortOrder
    modalTitle?: SortOrderInput | SortOrder
    buttonColor?: SortOrderInput | SortOrder
    headerColor?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    showPriority?: SortOrder
    theme?: SortOrderInput | SortOrder
    successMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrganizationOrderByWithRelationInput
  }

  export type WidgetConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId?: string
    AND?: WidgetConfigWhereInput | WidgetConfigWhereInput[]
    OR?: WidgetConfigWhereInput[]
    NOT?: WidgetConfigWhereInput | WidgetConfigWhereInput[]
    buttonText?: StringNullableFilter<"WidgetConfig"> | string | null
    modalTitle?: StringNullableFilter<"WidgetConfig"> | string | null
    buttonColor?: StringNullableFilter<"WidgetConfig"> | string | null
    headerColor?: StringNullableFilter<"WidgetConfig"> | string | null
    logoUrl?: StringNullableFilter<"WidgetConfig"> | string | null
    showPriority?: BoolFilter<"WidgetConfig"> | boolean
    theme?: StringNullableFilter<"WidgetConfig"> | string | null
    successMessage?: StringNullableFilter<"WidgetConfig"> | string | null
    createdAt?: DateTimeFilter<"WidgetConfig"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetConfig"> | Date | string
    org?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "orgId">

  export type WidgetConfigOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    buttonText?: SortOrderInput | SortOrder
    modalTitle?: SortOrderInput | SortOrder
    buttonColor?: SortOrderInput | SortOrder
    headerColor?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    showPriority?: SortOrder
    theme?: SortOrderInput | SortOrder
    successMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WidgetConfigCountOrderByAggregateInput
    _max?: WidgetConfigMaxOrderByAggregateInput
    _min?: WidgetConfigMinOrderByAggregateInput
  }

  export type WidgetConfigScalarWhereWithAggregatesInput = {
    AND?: WidgetConfigScalarWhereWithAggregatesInput | WidgetConfigScalarWhereWithAggregatesInput[]
    OR?: WidgetConfigScalarWhereWithAggregatesInput[]
    NOT?: WidgetConfigScalarWhereWithAggregatesInput | WidgetConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WidgetConfig"> | string
    orgId?: StringWithAggregatesFilter<"WidgetConfig"> | string
    buttonText?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    modalTitle?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    buttonColor?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    headerColor?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    showPriority?: BoolWithAggregatesFilter<"WidgetConfig"> | boolean
    theme?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    successMessage?: StringNullableWithAggregatesFilter<"WidgetConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WidgetConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WidgetConfig"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    enable?: BoolNullableFilter<"User"> | boolean | null
    password?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
    tickets?: TicketListRelationFilter
    assigned?: TicketListRelationFilter
    comments?: CommentListRelationFilter
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    enable?: SortOrderInput | SortOrder
    password?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    assigned?: TicketOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    Organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    enable?: BoolNullableFilter<"User"> | boolean | null
    password?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
    tickets?: TicketListRelationFilter
    assigned?: TicketListRelationFilter
    comments?: CommentListRelationFilter
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    enable?: SortOrderInput | SortOrder
    password?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    enable?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    password?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TicketAccessTokenWhereInput = {
    AND?: TicketAccessTokenWhereInput | TicketAccessTokenWhereInput[]
    OR?: TicketAccessTokenWhereInput[]
    NOT?: TicketAccessTokenWhereInput | TicketAccessTokenWhereInput[]
    id?: StringFilter<"TicketAccessToken"> | string
    ticketId?: StringFilter<"TicketAccessToken"> | string
    token?: StringFilter<"TicketAccessToken"> | string
    createdAt?: DateTimeFilter<"TicketAccessToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"TicketAccessToken"> | Date | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketAccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketAccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TicketAccessTokenWhereInput | TicketAccessTokenWhereInput[]
    OR?: TicketAccessTokenWhereInput[]
    NOT?: TicketAccessTokenWhereInput | TicketAccessTokenWhereInput[]
    ticketId?: StringFilter<"TicketAccessToken"> | string
    createdAt?: DateTimeFilter<"TicketAccessToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"TicketAccessToken"> | Date | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id" | "token">

  export type TicketAccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: TicketAccessTokenCountOrderByAggregateInput
    _max?: TicketAccessTokenMaxOrderByAggregateInput
    _min?: TicketAccessTokenMinOrderByAggregateInput
  }

  export type TicketAccessTokenScalarWhereWithAggregatesInput = {
    AND?: TicketAccessTokenScalarWhereWithAggregatesInput | TicketAccessTokenScalarWhereWithAggregatesInput[]
    OR?: TicketAccessTokenScalarWhereWithAggregatesInput[]
    NOT?: TicketAccessTokenScalarWhereWithAggregatesInput | TicketAccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketAccessToken"> | string
    ticketId?: StringWithAggregatesFilter<"TicketAccessToken"> | string
    token?: StringWithAggregatesFilter<"TicketAccessToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketAccessToken"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"TicketAccessToken"> | Date | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    title?: StringFilter<"Plan"> | string
    monthlyPrice?: FloatFilter<"Plan"> | number
    annualPrice?: FloatFilter<"Plan"> | number
    durationMonths?: IntFilter<"Plan"> | number
    description?: StringFilter<"Plan"> | string
    features?: StringNullableListFilter<"Plan">
    buttonText?: StringFilter<"Plan"> | string
    highlight?: BoolFilter<"Plan"> | boolean
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: StringNullableFilter<"Plan"> | string | null
    organizationPlans?: OrganizationPlanListRelationFilter
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
    description?: SortOrder
    features?: SortOrder
    buttonText?: SortOrder
    highlight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    organizationPlans?: OrganizationPlanOrderByRelationAggregateInput
    Organization?: OrganizationOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    title?: StringFilter<"Plan"> | string
    monthlyPrice?: FloatFilter<"Plan"> | number
    annualPrice?: FloatFilter<"Plan"> | number
    durationMonths?: IntFilter<"Plan"> | number
    description?: StringFilter<"Plan"> | string
    features?: StringNullableListFilter<"Plan">
    buttonText?: StringFilter<"Plan"> | string
    highlight?: BoolFilter<"Plan"> | boolean
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: StringNullableFilter<"Plan"> | string | null
    organizationPlans?: OrganizationPlanListRelationFilter
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
    description?: SortOrder
    features?: SortOrder
    buttonText?: SortOrder
    highlight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    title?: StringWithAggregatesFilter<"Plan"> | string
    monthlyPrice?: FloatWithAggregatesFilter<"Plan"> | number
    annualPrice?: FloatWithAggregatesFilter<"Plan"> | number
    durationMonths?: IntWithAggregatesFilter<"Plan"> | number
    description?: StringWithAggregatesFilter<"Plan"> | string
    features?: StringNullableListFilter<"Plan">
    buttonText?: StringWithAggregatesFilter<"Plan"> | string
    highlight?: BoolWithAggregatesFilter<"Plan"> | boolean
    isActive?: BoolWithAggregatesFilter<"Plan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    organizationId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
  }

  export type OrganizationPlanWhereInput = {
    AND?: OrganizationPlanWhereInput | OrganizationPlanWhereInput[]
    OR?: OrganizationPlanWhereInput[]
    NOT?: OrganizationPlanWhereInput | OrganizationPlanWhereInput[]
    id?: StringFilter<"OrganizationPlan"> | string
    organizationId?: StringFilter<"OrganizationPlan"> | string
    planId?: StringFilter<"OrganizationPlan"> | string
    startDate?: DateTimeFilter<"OrganizationPlan"> | Date | string
    expiresAt?: DateTimeFilter<"OrganizationPlan"> | Date | string
    isActive?: BoolFilter<"OrganizationPlan"> | boolean
    paymentId?: StringNullableFilter<"OrganizationPlan"> | string | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrganizationPlanOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type OrganizationPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: OrganizationPlanWhereInput | OrganizationPlanWhereInput[]
    OR?: OrganizationPlanWhereInput[]
    NOT?: OrganizationPlanWhereInput | OrganizationPlanWhereInput[]
    organizationId?: StringFilter<"OrganizationPlan"> | string
    planId?: StringFilter<"OrganizationPlan"> | string
    startDate?: DateTimeFilter<"OrganizationPlan"> | Date | string
    expiresAt?: DateTimeFilter<"OrganizationPlan"> | Date | string
    isActive?: BoolFilter<"OrganizationPlan"> | boolean
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "paymentId">

  export type OrganizationPlanOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    _count?: OrganizationPlanCountOrderByAggregateInput
    _max?: OrganizationPlanMaxOrderByAggregateInput
    _min?: OrganizationPlanMinOrderByAggregateInput
  }

  export type OrganizationPlanScalarWhereWithAggregatesInput = {
    AND?: OrganizationPlanScalarWhereWithAggregatesInput | OrganizationPlanScalarWhereWithAggregatesInput[]
    OR?: OrganizationPlanScalarWhereWithAggregatesInput[]
    NOT?: OrganizationPlanScalarWhereWithAggregatesInput | OrganizationPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationPlan"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationPlan"> | string
    planId?: StringWithAggregatesFilter<"OrganizationPlan"> | string
    startDate?: DateTimeWithAggregatesFilter<"OrganizationPlan"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"OrganizationPlan"> | Date | string
    isActive?: BoolWithAggregatesFilter<"OrganizationPlan"> | boolean
    paymentId?: StringNullableWithAggregatesFilter<"OrganizationPlan"> | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    slaDeadline?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    source?: EnumTicketSourceNullableFilter<"Ticket"> | $Enums.TicketSource | null
    createdById?: StringNullableFilter<"Ticket"> | string | null
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    externalName?: StringNullableFilter<"Ticket"> | string | null
    externalEmail?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringNullableFilter<"Ticket"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: CommentListRelationFilter
    ticketAccessTokens?: TicketAccessTokenListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    slaDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    externalName?: SortOrderInput | SortOrder
    externalEmail?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    ticketAccessTokens?: TicketAccessTokenOrderByRelationAggregateInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    slaDeadline?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    source?: EnumTicketSourceNullableFilter<"Ticket"> | $Enums.TicketSource | null
    createdById?: StringNullableFilter<"Ticket"> | string | null
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    externalName?: StringNullableFilter<"Ticket"> | string | null
    externalEmail?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringNullableFilter<"Ticket"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: CommentListRelationFilter
    ticketAccessTokens?: TicketAccessTokenListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    slaDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    externalName?: SortOrderInput | SortOrder
    externalEmail?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    slaDeadline?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    source?: EnumTicketSourceNullableWithAggregatesFilter<"Ticket"> | $Enums.TicketSource | null
    createdById?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    assignedToId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    externalName?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    externalEmail?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    ticketId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    isImage?: BoolNullableFilter<"Comment"> | boolean | null
    externalName?: StringNullableFilter<"Comment"> | string | null
    externalEmail?: StringNullableFilter<"Comment"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    isImage?: SortOrderInput | SortOrder
    externalName?: SortOrderInput | SortOrder
    externalEmail?: SortOrderInput | SortOrder
    ticket?: TicketOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    ticketId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    isImage?: BoolNullableFilter<"Comment"> | boolean | null
    externalName?: StringNullableFilter<"Comment"> | string | null
    externalEmail?: StringNullableFilter<"Comment"> | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    isImage?: SortOrderInput | SortOrder
    externalName?: SortOrderInput | SortOrder
    externalEmail?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    ticketId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    isImage?: BoolNullableWithAggregatesFilter<"Comment"> | boolean | null
    externalName?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    externalEmail?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    paymentReference?: StringFilter<"Payment"> | string
    organizationId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    organizationPlan?: XOR<OrganizationPlanNullableScalarRelationFilter, OrganizationPlanWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    paymentReference?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    organizationPlan?: OrganizationPlanOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentReference?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    organizationId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    organizationPlan?: XOR<OrganizationPlanNullableScalarRelationFilter, OrganizationPlanWhereInput> | null
  }, "id" | "paymentReference">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentReference?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    paymentReference?: StringWithAggregatesFilter<"Payment"> | string
    organizationId?: StringWithAggregatesFilter<"Payment"> | string
    planId?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type MailServiceConfigWhereInput = {
    AND?: MailServiceConfigWhereInput | MailServiceConfigWhereInput[]
    OR?: MailServiceConfigWhereInput[]
    NOT?: MailServiceConfigWhereInput | MailServiceConfigWhereInput[]
    id?: StringFilter<"MailServiceConfig"> | string
    name?: StringFilter<"MailServiceConfig"> | string
    serviceType?: StringFilter<"MailServiceConfig"> | string
    host?: StringFilter<"MailServiceConfig"> | string
    port?: IntFilter<"MailServiceConfig"> | number
    user?: StringFilter<"MailServiceConfig"> | string
    password?: StringFilter<"MailServiceConfig"> | string
    tls?: BoolFilter<"MailServiceConfig"> | boolean
    isActive?: BoolFilter<"MailServiceConfig"> | boolean
    createdAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    organizationId?: StringNullableFilter<"MailServiceConfig"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type MailServiceConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    password?: SortOrder
    tls?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type MailServiceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MailServiceConfigWhereInput | MailServiceConfigWhereInput[]
    OR?: MailServiceConfigWhereInput[]
    NOT?: MailServiceConfigWhereInput | MailServiceConfigWhereInput[]
    serviceType?: StringFilter<"MailServiceConfig"> | string
    host?: StringFilter<"MailServiceConfig"> | string
    port?: IntFilter<"MailServiceConfig"> | number
    user?: StringFilter<"MailServiceConfig"> | string
    password?: StringFilter<"MailServiceConfig"> | string
    tls?: BoolFilter<"MailServiceConfig"> | boolean
    isActive?: BoolFilter<"MailServiceConfig"> | boolean
    createdAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    organizationId?: StringNullableFilter<"MailServiceConfig"> | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id" | "name">

  export type MailServiceConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    password?: SortOrder
    tls?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: MailServiceConfigCountOrderByAggregateInput
    _avg?: MailServiceConfigAvgOrderByAggregateInput
    _max?: MailServiceConfigMaxOrderByAggregateInput
    _min?: MailServiceConfigMinOrderByAggregateInput
    _sum?: MailServiceConfigSumOrderByAggregateInput
  }

  export type MailServiceConfigScalarWhereWithAggregatesInput = {
    AND?: MailServiceConfigScalarWhereWithAggregatesInput | MailServiceConfigScalarWhereWithAggregatesInput[]
    OR?: MailServiceConfigScalarWhereWithAggregatesInput[]
    NOT?: MailServiceConfigScalarWhereWithAggregatesInput | MailServiceConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    name?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    serviceType?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    host?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    port?: IntWithAggregatesFilter<"MailServiceConfig"> | number
    user?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    password?: StringWithAggregatesFilter<"MailServiceConfig"> | string
    tls?: BoolWithAggregatesFilter<"MailServiceConfig"> | boolean
    isActive?: BoolWithAggregatesFilter<"MailServiceConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MailServiceConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MailServiceConfig"> | Date | string
    organizationId?: StringNullableWithAggregatesFilter<"MailServiceConfig"> | string | null
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetConfigCreateInput = {
    id?: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrganizationCreateNestedOneWithoutWidgetConfigInput
  }

  export type WidgetConfigUncheckedCreateInput = {
    id?: string
    orgId: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationUpdateOneRequiredWithoutWidgetConfigNestedInput
  }

  export type WidgetConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetConfigCreateManyInput = {
    id?: string
    orgId: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    assigned?: TicketCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    organizationId?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assigned?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    organizationId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketAccessTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    ticket: TicketCreateNestedOneWithoutTicketAccessTokensInput
  }

  export type TicketAccessTokenUncheckedCreateInput = {
    id?: string
    ticketId: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TicketAccessTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket?: TicketUpdateOneRequiredWithoutTicketAccessTokensNestedInput
  }

  export type TicketAccessTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketAccessTokenCreateManyInput = {
    id?: string
    ticketId: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TicketAccessTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketAccessTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanCreateInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlans?: OrganizationPlanCreateNestedManyWithoutPlanInput
    Organization?: OrganizationCreateNestedOneWithoutPlansInput
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    organizationPlans?: OrganizationPlanUncheckedCreateNestedManyWithoutPlanInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlans?: OrganizationPlanUpdateManyWithoutPlanNestedInput
    Organization?: OrganizationUpdateOneWithoutPlansNestedInput
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationPlans?: OrganizationPlanUncheckedUpdateManyWithoutPlanNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationPlanCreateInput = {
    id?: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    organization: OrganizationCreateNestedOneWithoutOrganizationPlanInput
    plan: PlanCreateNestedOneWithoutOrganizationPlansInput
    payment?: PaymentCreateNestedOneWithoutOrganizationPlanInput
  }

  export type OrganizationPlanUncheckedCreateInput = {
    id?: string
    organizationId: string
    planId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type OrganizationPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutOrganizationPlanNestedInput
    plan?: PlanUpdateOneRequiredWithoutOrganizationPlansNestedInput
    payment?: PaymentUpdateOneWithoutOrganizationPlanNestedInput
  }

  export type OrganizationPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationPlanCreateManyInput = {
    id?: string
    organizationId: string
    planId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type OrganizationPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenCreateNestedManyWithoutTicketInput
    organization?: OrganizationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUpdateManyWithoutTicketNestedInput
    organization?: OrganizationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
    ticket: TicketCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    ticketId: string
    authorId?: string | null
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    ticketId: string
    authorId?: string | null
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    paymentReference: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPaymentsInput
    plan: PlanCreateNestedOneWithoutPaymentsInput
    organizationPlan?: OrganizationPlanCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    paymentReference: string
    organizationId: string
    planId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlan?: OrganizationPlanUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPaymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutPaymentsNestedInput
    organizationPlan?: OrganizationPlanUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlan?: OrganizationPlanUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    paymentReference: string
    organizationId: string
    planId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailServiceConfigCreateInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutMailServiceConfigsInput
  }

  export type MailServiceConfigUncheckedCreateInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type MailServiceConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutMailServiceConfigsNestedInput
  }

  export type MailServiceConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MailServiceConfigCreateManyInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type MailServiceConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailServiceConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type WidgetConfigListRelationFilter = {
    every?: WidgetConfigWhereInput
    some?: WidgetConfigWhereInput
    none?: WidgetConfigWhereInput
  }

  export type OrganizationPlanListRelationFilter = {
    every?: OrganizationPlanWhereInput
    some?: OrganizationPlanWhereInput
    none?: OrganizationPlanWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type MailServiceConfigListRelationFilter = {
    every?: MailServiceConfigWhereInput
    some?: MailServiceConfigWhereInput
    none?: MailServiceConfigWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WidgetConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MailServiceConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slug?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slug?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slug?: SortOrder
    phoneNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WidgetConfigCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    buttonText?: SortOrder
    modalTitle?: SortOrder
    buttonColor?: SortOrder
    headerColor?: SortOrder
    logoUrl?: SortOrder
    showPriority?: SortOrder
    theme?: SortOrder
    successMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WidgetConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    buttonText?: SortOrder
    modalTitle?: SortOrder
    buttonColor?: SortOrder
    headerColor?: SortOrder
    logoUrl?: SortOrder
    showPriority?: SortOrder
    theme?: SortOrder
    successMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WidgetConfigMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    buttonText?: SortOrder
    modalTitle?: SortOrder
    buttonColor?: SortOrder
    headerColor?: SortOrder
    logoUrl?: SortOrder
    showPriority?: SortOrder
    theme?: SortOrder
    successMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    enable?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    enable?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    enable?: SortOrder
    password?: SortOrder
    organizationId?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketAccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TicketAccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TicketAccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
    description?: SortOrder
    features?: SortOrder
    buttonText?: SortOrder
    highlight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    highlight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    highlight?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    annualPrice?: SortOrder
    durationMonths?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrganizationPlanCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    paymentId?: SortOrder
  }

  export type OrganizationPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    paymentId?: SortOrder
  }

  export type OrganizationPlanMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    startDate?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    paymentId?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketSource | EnumTicketSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketSourceNullableFilter<$PrismaModel> | $Enums.TicketSource | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TicketAccessTokenListRelationFilter = {
    every?: TicketAccessTokenWhereInput
    some?: TicketAccessTokenWhereInput
    none?: TicketAccessTokenWhereInput
  }

  export type TicketAccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    slaDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
    organizationId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    slaDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
    organizationId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    slaDeadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    source?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketSource | EnumTicketSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.TicketSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTicketSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumTicketSourceNullableFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    isImage?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    isImage?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    isImage?: SortOrder
    externalName?: SortOrder
    externalEmail?: SortOrder
  }

  export type OrganizationPlanNullableScalarRelationFilter = {
    is?: OrganizationPlanWhereInput | null
    isNot?: OrganizationPlanWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentReference?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentReference?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentReference?: SortOrder
    organizationId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MailServiceConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    password?: SortOrder
    tls?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type MailServiceConfigAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type MailServiceConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    password?: SortOrder
    tls?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type MailServiceConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serviceType?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    password?: SortOrder
    tls?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type MailServiceConfigSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type WidgetConfigCreateNestedManyWithoutOrgInput = {
    create?: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput> | WidgetConfigCreateWithoutOrgInput[] | WidgetConfigUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: WidgetConfigCreateOrConnectWithoutOrgInput | WidgetConfigCreateOrConnectWithoutOrgInput[]
    createMany?: WidgetConfigCreateManyOrgInputEnvelope
    connect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
  }

  export type OrganizationPlanCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput> | OrganizationPlanCreateWithoutOrganizationInput[] | OrganizationPlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutOrganizationInput | OrganizationPlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationPlanCreateManyOrganizationInputEnvelope
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput> | PaymentCreateWithoutOrganizationInput[] | PaymentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationInput | PaymentCreateOrConnectWithoutOrganizationInput[]
    createMany?: PaymentCreateManyOrganizationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MailServiceConfigCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput> | MailServiceConfigCreateWithoutOrganizationInput[] | MailServiceConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MailServiceConfigCreateOrConnectWithoutOrganizationInput | MailServiceConfigCreateOrConnectWithoutOrganizationInput[]
    createMany?: MailServiceConfigCreateManyOrganizationInputEnvelope
    connect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type WidgetConfigUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput> | WidgetConfigCreateWithoutOrgInput[] | WidgetConfigUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: WidgetConfigCreateOrConnectWithoutOrgInput | WidgetConfigCreateOrConnectWithoutOrgInput[]
    createMany?: WidgetConfigCreateManyOrgInputEnvelope
    connect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
  }

  export type OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput> | OrganizationPlanCreateWithoutOrganizationInput[] | OrganizationPlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutOrganizationInput | OrganizationPlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationPlanCreateManyOrganizationInputEnvelope
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput> | PaymentCreateWithoutOrganizationInput[] | PaymentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationInput | PaymentCreateOrConnectWithoutOrganizationInput[]
    createMany?: PaymentCreateManyOrganizationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput> | MailServiceConfigCreateWithoutOrganizationInput[] | MailServiceConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MailServiceConfigCreateOrConnectWithoutOrganizationInput | MailServiceConfigCreateOrConnectWithoutOrganizationInput[]
    createMany?: MailServiceConfigCreateManyOrganizationInputEnvelope
    connect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutOrganizationInput | PlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutOrganizationInput | PlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutOrganizationInput | PlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type WidgetConfigUpdateManyWithoutOrgNestedInput = {
    create?: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput> | WidgetConfigCreateWithoutOrgInput[] | WidgetConfigUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: WidgetConfigCreateOrConnectWithoutOrgInput | WidgetConfigCreateOrConnectWithoutOrgInput[]
    upsert?: WidgetConfigUpsertWithWhereUniqueWithoutOrgInput | WidgetConfigUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: WidgetConfigCreateManyOrgInputEnvelope
    set?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    disconnect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    delete?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    connect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    update?: WidgetConfigUpdateWithWhereUniqueWithoutOrgInput | WidgetConfigUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: WidgetConfigUpdateManyWithWhereWithoutOrgInput | WidgetConfigUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: WidgetConfigScalarWhereInput | WidgetConfigScalarWhereInput[]
  }

  export type OrganizationPlanUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput> | OrganizationPlanCreateWithoutOrganizationInput[] | OrganizationPlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutOrganizationInput | OrganizationPlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationPlanUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationPlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationPlanCreateManyOrganizationInputEnvelope
    set?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    disconnect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    delete?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    update?: OrganizationPlanUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationPlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationPlanUpdateManyWithWhereWithoutOrganizationInput | OrganizationPlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput> | PaymentCreateWithoutOrganizationInput[] | PaymentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationInput | PaymentCreateOrConnectWithoutOrganizationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrganizationInput | PaymentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PaymentCreateManyOrganizationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrganizationInput | PaymentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrganizationInput | PaymentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MailServiceConfigUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput> | MailServiceConfigCreateWithoutOrganizationInput[] | MailServiceConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MailServiceConfigCreateOrConnectWithoutOrganizationInput | MailServiceConfigCreateOrConnectWithoutOrganizationInput[]
    upsert?: MailServiceConfigUpsertWithWhereUniqueWithoutOrganizationInput | MailServiceConfigUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MailServiceConfigCreateManyOrganizationInputEnvelope
    set?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    disconnect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    delete?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    connect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    update?: MailServiceConfigUpdateWithWhereUniqueWithoutOrganizationInput | MailServiceConfigUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MailServiceConfigUpdateManyWithWhereWithoutOrganizationInput | MailServiceConfigUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MailServiceConfigScalarWhereInput | MailServiceConfigScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutOrganizationInput | PlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutOrganizationInput | PlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutOrganizationInput | PlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput> | TicketCreateWithoutOrganizationInput[] | TicketUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutOrganizationInput | TicketCreateOrConnectWithoutOrganizationInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutOrganizationInput | TicketUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TicketCreateManyOrganizationInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutOrganizationInput | TicketUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutOrganizationInput | TicketUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput> | WidgetConfigCreateWithoutOrgInput[] | WidgetConfigUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: WidgetConfigCreateOrConnectWithoutOrgInput | WidgetConfigCreateOrConnectWithoutOrgInput[]
    upsert?: WidgetConfigUpsertWithWhereUniqueWithoutOrgInput | WidgetConfigUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: WidgetConfigCreateManyOrgInputEnvelope
    set?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    disconnect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    delete?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    connect?: WidgetConfigWhereUniqueInput | WidgetConfigWhereUniqueInput[]
    update?: WidgetConfigUpdateWithWhereUniqueWithoutOrgInput | WidgetConfigUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: WidgetConfigUpdateManyWithWhereWithoutOrgInput | WidgetConfigUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: WidgetConfigScalarWhereInput | WidgetConfigScalarWhereInput[]
  }

  export type OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput> | OrganizationPlanCreateWithoutOrganizationInput[] | OrganizationPlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutOrganizationInput | OrganizationPlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationPlanUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationPlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationPlanCreateManyOrganizationInputEnvelope
    set?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    disconnect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    delete?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    update?: OrganizationPlanUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationPlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationPlanUpdateManyWithWhereWithoutOrganizationInput | OrganizationPlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput> | PaymentCreateWithoutOrganizationInput[] | PaymentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationInput | PaymentCreateOrConnectWithoutOrganizationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrganizationInput | PaymentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PaymentCreateManyOrganizationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrganizationInput | PaymentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrganizationInput | PaymentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput> | MailServiceConfigCreateWithoutOrganizationInput[] | MailServiceConfigUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: MailServiceConfigCreateOrConnectWithoutOrganizationInput | MailServiceConfigCreateOrConnectWithoutOrganizationInput[]
    upsert?: MailServiceConfigUpsertWithWhereUniqueWithoutOrganizationInput | MailServiceConfigUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: MailServiceConfigCreateManyOrganizationInputEnvelope
    set?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    disconnect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    delete?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    connect?: MailServiceConfigWhereUniqueInput | MailServiceConfigWhereUniqueInput[]
    update?: MailServiceConfigUpdateWithWhereUniqueWithoutOrganizationInput | MailServiceConfigUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: MailServiceConfigUpdateManyWithWhereWithoutOrganizationInput | MailServiceConfigUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: MailServiceConfigScalarWhereInput | MailServiceConfigScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutWidgetConfigInput = {
    create?: XOR<OrganizationCreateWithoutWidgetConfigInput, OrganizationUncheckedCreateWithoutWidgetConfigInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutWidgetConfigInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneRequiredWithoutWidgetConfigNestedInput = {
    create?: XOR<OrganizationCreateWithoutWidgetConfigInput, OrganizationUncheckedCreateWithoutWidgetConfigInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutWidgetConfigInput
    upsert?: OrganizationUpsertWithoutWidgetConfigInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutWidgetConfigInput, OrganizationUpdateWithoutWidgetConfigInput>, OrganizationUncheckedUpdateWithoutWidgetConfigInput>
  }

  export type TicketCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TicketUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput> | TicketCreateWithoutCreatedByInput[] | TicketUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreatedByInput | TicketCreateOrConnectWithoutCreatedByInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreatedByInput | TicketUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TicketCreateManyCreatedByInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreatedByInput | TicketUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreatedByInput | TicketUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput> | TicketCreateWithoutAssignedToInput[] | TicketUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput | TicketCreateOrConnectWithoutAssignedToInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput | TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TicketCreateManyAssignedToInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput | TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput | TicketUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutTicketAccessTokensInput = {
    create?: XOR<TicketCreateWithoutTicketAccessTokensInput, TicketUncheckedCreateWithoutTicketAccessTokensInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketAccessTokensInput
    connect?: TicketWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TicketUpdateOneRequiredWithoutTicketAccessTokensNestedInput = {
    create?: XOR<TicketCreateWithoutTicketAccessTokensInput, TicketUncheckedCreateWithoutTicketAccessTokensInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketAccessTokensInput
    upsert?: TicketUpsertWithoutTicketAccessTokensInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketAccessTokensInput, TicketUpdateWithoutTicketAccessTokensInput>, TicketUncheckedUpdateWithoutTicketAccessTokensInput>
  }

  export type PlanCreatefeaturesInput = {
    set: string[]
  }

  export type OrganizationPlanCreateNestedManyWithoutPlanInput = {
    create?: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput> | OrganizationPlanCreateWithoutPlanInput[] | OrganizationPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPlanInput | OrganizationPlanCreateOrConnectWithoutPlanInput[]
    createMany?: OrganizationPlanCreateManyPlanInputEnvelope
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutPlansInput = {
    create?: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPlansInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type OrganizationPlanUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput> | OrganizationPlanCreateWithoutPlanInput[] | OrganizationPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPlanInput | OrganizationPlanCreateOrConnectWithoutPlanInput[]
    createMany?: OrganizationPlanCreateManyPlanInputEnvelope
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationPlanUpdateManyWithoutPlanNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput> | OrganizationPlanCreateWithoutPlanInput[] | OrganizationPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPlanInput | OrganizationPlanCreateOrConnectWithoutPlanInput[]
    upsert?: OrganizationPlanUpsertWithWhereUniqueWithoutPlanInput | OrganizationPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: OrganizationPlanCreateManyPlanInputEnvelope
    set?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    disconnect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    delete?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    update?: OrganizationPlanUpdateWithWhereUniqueWithoutPlanInput | OrganizationPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: OrganizationPlanUpdateManyWithWhereWithoutPlanInput | OrganizationPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutPlansNestedInput = {
    create?: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPlansInput
    upsert?: OrganizationUpsertWithoutPlansInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPlansInput, OrganizationUpdateWithoutPlansInput>, OrganizationUncheckedUpdateWithoutPlansInput>
  }

  export type PaymentUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrganizationPlanUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput> | OrganizationPlanCreateWithoutPlanInput[] | OrganizationPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPlanInput | OrganizationPlanCreateOrConnectWithoutPlanInput[]
    upsert?: OrganizationPlanUpsertWithWhereUniqueWithoutPlanInput | OrganizationPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: OrganizationPlanCreateManyPlanInputEnvelope
    set?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    disconnect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    delete?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    connect?: OrganizationPlanWhereUniqueInput | OrganizationPlanWhereUniqueInput[]
    update?: OrganizationPlanUpdateWithWhereUniqueWithoutPlanInput | OrganizationPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: OrganizationPlanUpdateManyWithWhereWithoutPlanInput | OrganizationPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutOrganizationPlanInput = {
    create?: XOR<OrganizationCreateWithoutOrganizationPlanInput, OrganizationUncheckedCreateWithoutOrganizationPlanInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOrganizationPlanInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutOrganizationPlansInput = {
    create?: XOR<PlanCreateWithoutOrganizationPlansInput, PlanUncheckedCreateWithoutOrganizationPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationPlansInput
    connect?: PlanWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrganizationPlanInput = {
    create?: XOR<PaymentCreateWithoutOrganizationPlanInput, PaymentUncheckedCreateWithoutOrganizationPlanInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationPlanInput
    connect?: PaymentWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutOrganizationPlanNestedInput = {
    create?: XOR<OrganizationCreateWithoutOrganizationPlanInput, OrganizationUncheckedCreateWithoutOrganizationPlanInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOrganizationPlanInput
    upsert?: OrganizationUpsertWithoutOrganizationPlanInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutOrganizationPlanInput, OrganizationUpdateWithoutOrganizationPlanInput>, OrganizationUncheckedUpdateWithoutOrganizationPlanInput>
  }

  export type PlanUpdateOneRequiredWithoutOrganizationPlansNestedInput = {
    create?: XOR<PlanCreateWithoutOrganizationPlansInput, PlanUncheckedCreateWithoutOrganizationPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationPlansInput
    upsert?: PlanUpsertWithoutOrganizationPlansInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutOrganizationPlansInput, PlanUpdateWithoutOrganizationPlansInput>, PlanUncheckedUpdateWithoutOrganizationPlansInput>
  }

  export type PaymentUpdateOneWithoutOrganizationPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutOrganizationPlanInput, PaymentUncheckedCreateWithoutOrganizationPlanInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrganizationPlanInput
    upsert?: PaymentUpsertWithoutOrganizationPlanInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrganizationPlanInput, PaymentUpdateWithoutOrganizationPlanInput>, PaymentUncheckedUpdateWithoutOrganizationPlanInput>
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedInput = {
    create?: XOR<UserCreateWithoutAssignedInput, UserUncheckedCreateWithoutAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TicketAccessTokenCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput> | TicketAccessTokenCreateWithoutTicketInput[] | TicketAccessTokenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAccessTokenCreateOrConnectWithoutTicketInput | TicketAccessTokenCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAccessTokenCreateManyTicketInputEnvelope
    connect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
  }

  export type OrganizationCreateNestedOneWithoutTicketsInput = {
    create?: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput> | TicketAccessTokenCreateWithoutTicketInput[] | TicketAccessTokenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAccessTokenCreateOrConnectWithoutTicketInput | TicketAccessTokenCreateOrConnectWithoutTicketInput[]
    createMany?: TicketAccessTokenCreateManyTicketInputEnvelope
    connect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type NullableEnumTicketSourceFieldUpdateOperationsInput = {
    set?: $Enums.TicketSource | null
  }

  export type UserUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutAssignedNestedInput = {
    create?: XOR<UserCreateWithoutAssignedInput, UserUncheckedCreateWithoutAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedInput
    upsert?: UserUpsertWithoutAssignedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedInput, UserUpdateWithoutAssignedInput>, UserUncheckedUpdateWithoutAssignedInput>
  }

  export type CommentUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TicketAccessTokenUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput> | TicketAccessTokenCreateWithoutTicketInput[] | TicketAccessTokenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAccessTokenCreateOrConnectWithoutTicketInput | TicketAccessTokenCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAccessTokenUpsertWithWhereUniqueWithoutTicketInput | TicketAccessTokenUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAccessTokenCreateManyTicketInputEnvelope
    set?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    disconnect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    delete?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    connect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    update?: TicketAccessTokenUpdateWithWhereUniqueWithoutTicketInput | TicketAccessTokenUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAccessTokenUpdateManyWithWhereWithoutTicketInput | TicketAccessTokenUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAccessTokenScalarWhereInput | TicketAccessTokenScalarWhereInput[]
  }

  export type OrganizationUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTicketsInput
    upsert?: OrganizationUpsertWithoutTicketsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTicketsInput, OrganizationUpdateWithoutTicketsInput>, OrganizationUncheckedUpdateWithoutTicketsInput>
  }

  export type CommentUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput> | CommentCreateWithoutTicketInput[] | CommentUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTicketInput | CommentCreateOrConnectWithoutTicketInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTicketInput | CommentUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CommentCreateManyTicketInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTicketInput | CommentUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTicketInput | CommentUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput> | TicketAccessTokenCreateWithoutTicketInput[] | TicketAccessTokenUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketAccessTokenCreateOrConnectWithoutTicketInput | TicketAccessTokenCreateOrConnectWithoutTicketInput[]
    upsert?: TicketAccessTokenUpsertWithWhereUniqueWithoutTicketInput | TicketAccessTokenUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketAccessTokenCreateManyTicketInputEnvelope
    set?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    disconnect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    delete?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    connect?: TicketAccessTokenWhereUniqueInput | TicketAccessTokenWhereUniqueInput[]
    update?: TicketAccessTokenUpdateWithWhereUniqueWithoutTicketInput | TicketAccessTokenUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketAccessTokenUpdateManyWithWhereWithoutTicketInput | TicketAccessTokenUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketAccessTokenScalarWhereInput | TicketAccessTokenScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutCommentsInput
    upsert?: TicketUpsertWithoutCommentsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutCommentsInput, TicketUpdateWithoutCommentsInput>, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type OrganizationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrganizationCreateWithoutPaymentsInput, OrganizationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPaymentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PlanCreateWithoutPaymentsInput, PlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPaymentsInput
    connect?: PlanWhereUniqueInput
  }

  export type OrganizationPlanCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPaymentInput
    connect?: OrganizationPlanWhereUniqueInput
  }

  export type OrganizationPlanUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPaymentInput
    connect?: OrganizationPlanWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPaymentsInput, OrganizationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPaymentsInput
    upsert?: OrganizationUpsertWithoutPaymentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPaymentsInput, OrganizationUpdateWithoutPaymentsInput>, OrganizationUncheckedUpdateWithoutPaymentsInput>
  }

  export type PlanUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PlanCreateWithoutPaymentsInput, PlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPaymentsInput
    upsert?: PlanUpsertWithoutPaymentsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPaymentsInput, PlanUpdateWithoutPaymentsInput>, PlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrganizationPlanUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPaymentInput
    upsert?: OrganizationPlanUpsertWithoutPaymentInput
    disconnect?: OrganizationPlanWhereInput | boolean
    delete?: OrganizationPlanWhereInput | boolean
    connect?: OrganizationPlanWhereUniqueInput
    update?: XOR<XOR<OrganizationPlanUpdateToOneWithWhereWithoutPaymentInput, OrganizationPlanUpdateWithoutPaymentInput>, OrganizationPlanUncheckedUpdateWithoutPaymentInput>
  }

  export type OrganizationPlanUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrganizationPlanCreateOrConnectWithoutPaymentInput
    upsert?: OrganizationPlanUpsertWithoutPaymentInput
    disconnect?: OrganizationPlanWhereInput | boolean
    delete?: OrganizationPlanWhereInput | boolean
    connect?: OrganizationPlanWhereUniqueInput
    update?: XOR<XOR<OrganizationPlanUpdateToOneWithWhereWithoutPaymentInput, OrganizationPlanUpdateWithoutPaymentInput>, OrganizationPlanUncheckedUpdateWithoutPaymentInput>
  }

  export type OrganizationCreateNestedOneWithoutMailServiceConfigsInput = {
    create?: XOR<OrganizationCreateWithoutMailServiceConfigsInput, OrganizationUncheckedCreateWithoutMailServiceConfigsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMailServiceConfigsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutMailServiceConfigsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMailServiceConfigsInput, OrganizationUncheckedCreateWithoutMailServiceConfigsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMailServiceConfigsInput
    upsert?: OrganizationUpsertWithoutMailServiceConfigsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMailServiceConfigsInput, OrganizationUpdateWithoutMailServiceConfigsInput>, OrganizationUncheckedUpdateWithoutMailServiceConfigsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketSourceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketSource | EnumTicketSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketSourceNullableFilter<$PrismaModel> | $Enums.TicketSource | null
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketSourceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketSource | EnumTicketSourceFieldRefInput<$PrismaModel> | null
    in?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TicketSource[] | ListEnumTicketSourceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTicketSourceNullableWithAggregatesFilter<$PrismaModel> | $Enums.TicketSource | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTicketSourceNullableFilter<$PrismaModel>
    _max?: NestedEnumTicketSourceNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    assigned?: TicketCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assigned?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutOrganizationInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlans?: OrganizationPlanCreateNestedManyWithoutPlanInput
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlans?: OrganizationPlanUncheckedCreateNestedManyWithoutPlanInput
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput>
  }

  export type PlanCreateManyOrganizationInputEnvelope = {
    data: PlanCreateManyOrganizationInput | PlanCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketCreateManyOrganizationInputEnvelope = {
    data: TicketCreateManyOrganizationInput | TicketCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type WidgetConfigCreateWithoutOrgInput = {
    id?: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetConfigUncheckedCreateWithoutOrgInput = {
    id?: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WidgetConfigCreateOrConnectWithoutOrgInput = {
    where: WidgetConfigWhereUniqueInput
    create: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput>
  }

  export type WidgetConfigCreateManyOrgInputEnvelope = {
    data: WidgetConfigCreateManyOrgInput | WidgetConfigCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationPlanCreateWithoutOrganizationInput = {
    id?: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    plan: PlanCreateNestedOneWithoutOrganizationPlansInput
    payment?: PaymentCreateNestedOneWithoutOrganizationPlanInput
  }

  export type OrganizationPlanUncheckedCreateWithoutOrganizationInput = {
    id?: string
    planId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type OrganizationPlanCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationPlanWhereUniqueInput
    create: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationPlanCreateManyOrganizationInputEnvelope = {
    data: OrganizationPlanCreateManyOrganizationInput | OrganizationPlanCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrganizationInput = {
    id?: string
    paymentReference: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutPaymentsInput
    organizationPlan?: OrganizationPlanCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    paymentReference: string
    planId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlan?: OrganizationPlanUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutOrganizationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput>
  }

  export type PaymentCreateManyOrganizationInputEnvelope = {
    data: PaymentCreateManyOrganizationInput | PaymentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type MailServiceConfigCreateWithoutOrganizationInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailServiceConfigUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailServiceConfigCreateOrConnectWithoutOrganizationInput = {
    where: MailServiceConfigWhereUniqueInput
    create: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput>
  }

  export type MailServiceConfigCreateManyOrganizationInputEnvelope = {
    data: MailServiceConfigCreateManyOrganizationInput | MailServiceConfigCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    enable?: BoolNullableFilter<"User"> | boolean | null
    password?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
  }

  export type PlanUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutOrganizationInput, PlanUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutOrganizationInput, PlanUncheckedUpdateWithoutOrganizationInput>
  }

  export type PlanUpdateManyWithWhereWithoutOrganizationInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    title?: StringFilter<"Plan"> | string
    monthlyPrice?: FloatFilter<"Plan"> | number
    annualPrice?: FloatFilter<"Plan"> | number
    durationMonths?: IntFilter<"Plan"> | number
    description?: StringFilter<"Plan"> | string
    features?: StringNullableListFilter<"Plan">
    buttonText?: StringFilter<"Plan"> | string
    highlight?: BoolFilter<"Plan"> | boolean
    isActive?: BoolFilter<"Plan"> | boolean
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: StringNullableFilter<"Plan"> | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TicketCreateWithoutOrganizationInput, TicketUncheckedCreateWithoutOrganizationInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutOrganizationInput, TicketUncheckedUpdateWithoutOrganizationInput>
  }

  export type TicketUpdateManyWithWhereWithoutOrganizationInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    title?: StringFilter<"Ticket"> | string
    description?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    slaDeadline?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    source?: EnumTicketSourceNullableFilter<"Ticket"> | $Enums.TicketSource | null
    createdById?: StringNullableFilter<"Ticket"> | string | null
    assignedToId?: StringNullableFilter<"Ticket"> | string | null
    externalName?: StringNullableFilter<"Ticket"> | string | null
    externalEmail?: StringNullableFilter<"Ticket"> | string | null
    organizationId?: StringNullableFilter<"Ticket"> | string | null
  }

  export type WidgetConfigUpsertWithWhereUniqueWithoutOrgInput = {
    where: WidgetConfigWhereUniqueInput
    update: XOR<WidgetConfigUpdateWithoutOrgInput, WidgetConfigUncheckedUpdateWithoutOrgInput>
    create: XOR<WidgetConfigCreateWithoutOrgInput, WidgetConfigUncheckedCreateWithoutOrgInput>
  }

  export type WidgetConfigUpdateWithWhereUniqueWithoutOrgInput = {
    where: WidgetConfigWhereUniqueInput
    data: XOR<WidgetConfigUpdateWithoutOrgInput, WidgetConfigUncheckedUpdateWithoutOrgInput>
  }

  export type WidgetConfigUpdateManyWithWhereWithoutOrgInput = {
    where: WidgetConfigScalarWhereInput
    data: XOR<WidgetConfigUpdateManyMutationInput, WidgetConfigUncheckedUpdateManyWithoutOrgInput>
  }

  export type WidgetConfigScalarWhereInput = {
    AND?: WidgetConfigScalarWhereInput | WidgetConfigScalarWhereInput[]
    OR?: WidgetConfigScalarWhereInput[]
    NOT?: WidgetConfigScalarWhereInput | WidgetConfigScalarWhereInput[]
    id?: StringFilter<"WidgetConfig"> | string
    orgId?: StringFilter<"WidgetConfig"> | string
    buttonText?: StringNullableFilter<"WidgetConfig"> | string | null
    modalTitle?: StringNullableFilter<"WidgetConfig"> | string | null
    buttonColor?: StringNullableFilter<"WidgetConfig"> | string | null
    headerColor?: StringNullableFilter<"WidgetConfig"> | string | null
    logoUrl?: StringNullableFilter<"WidgetConfig"> | string | null
    showPriority?: BoolFilter<"WidgetConfig"> | boolean
    theme?: StringNullableFilter<"WidgetConfig"> | string | null
    successMessage?: StringNullableFilter<"WidgetConfig"> | string | null
    createdAt?: DateTimeFilter<"WidgetConfig"> | Date | string
    updatedAt?: DateTimeFilter<"WidgetConfig"> | Date | string
  }

  export type OrganizationPlanUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationPlanWhereUniqueInput
    update: XOR<OrganizationPlanUpdateWithoutOrganizationInput, OrganizationPlanUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationPlanCreateWithoutOrganizationInput, OrganizationPlanUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationPlanUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationPlanWhereUniqueInput
    data: XOR<OrganizationPlanUpdateWithoutOrganizationInput, OrganizationPlanUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationPlanUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationPlanScalarWhereInput
    data: XOR<OrganizationPlanUpdateManyMutationInput, OrganizationPlanUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationPlanScalarWhereInput = {
    AND?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
    OR?: OrganizationPlanScalarWhereInput[]
    NOT?: OrganizationPlanScalarWhereInput | OrganizationPlanScalarWhereInput[]
    id?: StringFilter<"OrganizationPlan"> | string
    organizationId?: StringFilter<"OrganizationPlan"> | string
    planId?: StringFilter<"OrganizationPlan"> | string
    startDate?: DateTimeFilter<"OrganizationPlan"> | Date | string
    expiresAt?: DateTimeFilter<"OrganizationPlan"> | Date | string
    isActive?: BoolFilter<"OrganizationPlan"> | boolean
    paymentId?: StringNullableFilter<"OrganizationPlan"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrganizationInput, PaymentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PaymentCreateWithoutOrganizationInput, PaymentUncheckedCreateWithoutOrganizationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrganizationInput, PaymentUncheckedUpdateWithoutOrganizationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrganizationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    paymentReference?: StringFilter<"Payment"> | string
    organizationId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type MailServiceConfigUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: MailServiceConfigWhereUniqueInput
    update: XOR<MailServiceConfigUpdateWithoutOrganizationInput, MailServiceConfigUncheckedUpdateWithoutOrganizationInput>
    create: XOR<MailServiceConfigCreateWithoutOrganizationInput, MailServiceConfigUncheckedCreateWithoutOrganizationInput>
  }

  export type MailServiceConfigUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: MailServiceConfigWhereUniqueInput
    data: XOR<MailServiceConfigUpdateWithoutOrganizationInput, MailServiceConfigUncheckedUpdateWithoutOrganizationInput>
  }

  export type MailServiceConfigUpdateManyWithWhereWithoutOrganizationInput = {
    where: MailServiceConfigScalarWhereInput
    data: XOR<MailServiceConfigUpdateManyMutationInput, MailServiceConfigUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type MailServiceConfigScalarWhereInput = {
    AND?: MailServiceConfigScalarWhereInput | MailServiceConfigScalarWhereInput[]
    OR?: MailServiceConfigScalarWhereInput[]
    NOT?: MailServiceConfigScalarWhereInput | MailServiceConfigScalarWhereInput[]
    id?: StringFilter<"MailServiceConfig"> | string
    name?: StringFilter<"MailServiceConfig"> | string
    serviceType?: StringFilter<"MailServiceConfig"> | string
    host?: StringFilter<"MailServiceConfig"> | string
    port?: IntFilter<"MailServiceConfig"> | number
    user?: StringFilter<"MailServiceConfig"> | string
    password?: StringFilter<"MailServiceConfig"> | string
    tls?: BoolFilter<"MailServiceConfig"> | boolean
    isActive?: BoolFilter<"MailServiceConfig"> | boolean
    createdAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"MailServiceConfig"> | Date | string
    organizationId?: StringNullableFilter<"MailServiceConfig"> | string | null
  }

  export type OrganizationCreateWithoutWidgetConfigInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutWidgetConfigInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutWidgetConfigInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutWidgetConfigInput, OrganizationUncheckedCreateWithoutWidgetConfigInput>
  }

  export type OrganizationUpsertWithoutWidgetConfigInput = {
    update: XOR<OrganizationUpdateWithoutWidgetConfigInput, OrganizationUncheckedUpdateWithoutWidgetConfigInput>
    create: XOR<OrganizationCreateWithoutWidgetConfigInput, OrganizationUncheckedCreateWithoutWidgetConfigInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutWidgetConfigInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutWidgetConfigInput, OrganizationUncheckedUpdateWithoutWidgetConfigInput>
  }

  export type OrganizationUpdateWithoutWidgetConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutWidgetConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type TicketCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    assignedTo?: UserCreateNestedOneWithoutAssignedInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenCreateNestedManyWithoutTicketInput
    organization?: OrganizationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketCreateManyCreatedByInputEnvelope = {
    data: TicketCreateManyCreatedByInput | TicketCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenCreateNestedManyWithoutTicketInput
    organization?: OrganizationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
    ticketAccessTokens?: TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketCreateManyAssignedToInputEnvelope = {
    data: TicketCreateManyAssignedToInput | TicketCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
    ticket: TicketCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    ticketId: string
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TicketCreateWithoutCreatedByInput, TicketUncheckedCreateWithoutCreatedByInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreatedByInput, TicketUncheckedUpdateWithoutCreatedByInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreatedByInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TicketCreateWithoutAssignedToInput, TicketUncheckedCreateWithoutAssignedToInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAssignedToInput, TicketUncheckedUpdateWithoutAssignedToInput>
  }

  export type TicketUpdateManyWithWhereWithoutAssignedToInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    ticketId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    isImage?: BoolNullableFilter<"Comment"> | boolean | null
    externalName?: StringNullableFilter<"Comment"> | string | null
    externalEmail?: StringNullableFilter<"Comment"> | string | null
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type TicketCreateWithoutTicketAccessTokensInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedInput
    comments?: CommentCreateNestedManyWithoutTicketInput
    organization?: OrganizationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutTicketAccessTokensInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketAccessTokensInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketAccessTokensInput, TicketUncheckedCreateWithoutTicketAccessTokensInput>
  }

  export type TicketUpsertWithoutTicketAccessTokensInput = {
    update: XOR<TicketUpdateWithoutTicketAccessTokensInput, TicketUncheckedUpdateWithoutTicketAccessTokensInput>
    create: XOR<TicketCreateWithoutTicketAccessTokensInput, TicketUncheckedCreateWithoutTicketAccessTokensInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketAccessTokensInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketAccessTokensInput, TicketUncheckedUpdateWithoutTicketAccessTokensInput>
  }

  export type TicketUpdateWithoutTicketAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    organization?: OrganizationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketAccessTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type OrganizationPlanCreateWithoutPlanInput = {
    id?: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    organization: OrganizationCreateNestedOneWithoutOrganizationPlanInput
    payment?: PaymentCreateNestedOneWithoutOrganizationPlanInput
  }

  export type OrganizationPlanUncheckedCreateWithoutPlanInput = {
    id?: string
    organizationId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type OrganizationPlanCreateOrConnectWithoutPlanInput = {
    where: OrganizationPlanWhereUniqueInput
    create: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput>
  }

  export type OrganizationPlanCreateManyPlanInputEnvelope = {
    data: OrganizationPlanCreateManyPlanInput | OrganizationPlanCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutPlansInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPlansInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
  }

  export type PaymentCreateWithoutPlanInput = {
    id?: string
    paymentReference: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPaymentsInput
    organizationPlan?: OrganizationPlanCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutPlanInput = {
    id?: string
    paymentReference: string
    organizationId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlan?: OrganizationPlanUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentCreateManyPlanInputEnvelope = {
    data: PaymentCreateManyPlanInput | PaymentCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationPlanUpsertWithWhereUniqueWithoutPlanInput = {
    where: OrganizationPlanWhereUniqueInput
    update: XOR<OrganizationPlanUpdateWithoutPlanInput, OrganizationPlanUncheckedUpdateWithoutPlanInput>
    create: XOR<OrganizationPlanCreateWithoutPlanInput, OrganizationPlanUncheckedCreateWithoutPlanInput>
  }

  export type OrganizationPlanUpdateWithWhereUniqueWithoutPlanInput = {
    where: OrganizationPlanWhereUniqueInput
    data: XOR<OrganizationPlanUpdateWithoutPlanInput, OrganizationPlanUncheckedUpdateWithoutPlanInput>
  }

  export type OrganizationPlanUpdateManyWithWhereWithoutPlanInput = {
    where: OrganizationPlanScalarWhereInput
    data: XOR<OrganizationPlanUpdateManyMutationInput, OrganizationPlanUncheckedUpdateManyWithoutPlanInput>
  }

  export type OrganizationUpsertWithoutPlansInput = {
    update: XOR<OrganizationUpdateWithoutPlansInput, OrganizationUncheckedUpdateWithoutPlansInput>
    create: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPlansInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPlansInput, OrganizationUncheckedUpdateWithoutPlansInput>
  }

  export type OrganizationUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPlanInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPlanInput>
  }

  export type OrganizationCreateWithoutOrganizationPlanInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOrganizationPlanInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOrganizationPlanInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOrganizationPlanInput, OrganizationUncheckedCreateWithoutOrganizationPlanInput>
  }

  export type PlanCreateWithoutOrganizationPlansInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutPlansInput
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutOrganizationPlansInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutOrganizationPlansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutOrganizationPlansInput, PlanUncheckedCreateWithoutOrganizationPlansInput>
  }

  export type PaymentCreateWithoutOrganizationPlanInput = {
    id?: string
    paymentReference: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPaymentsInput
    plan: PlanCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutOrganizationPlanInput = {
    id?: string
    paymentReference: string
    organizationId: string
    planId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrganizationPlanInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrganizationPlanInput, PaymentUncheckedCreateWithoutOrganizationPlanInput>
  }

  export type OrganizationUpsertWithoutOrganizationPlanInput = {
    update: XOR<OrganizationUpdateWithoutOrganizationPlanInput, OrganizationUncheckedUpdateWithoutOrganizationPlanInput>
    create: XOR<OrganizationCreateWithoutOrganizationPlanInput, OrganizationUncheckedCreateWithoutOrganizationPlanInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutOrganizationPlanInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutOrganizationPlanInput, OrganizationUncheckedUpdateWithoutOrganizationPlanInput>
  }

  export type OrganizationUpdateWithoutOrganizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOrganizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PlanUpsertWithoutOrganizationPlansInput = {
    update: XOR<PlanUpdateWithoutOrganizationPlansInput, PlanUncheckedUpdateWithoutOrganizationPlansInput>
    create: XOR<PlanCreateWithoutOrganizationPlansInput, PlanUncheckedCreateWithoutOrganizationPlansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutOrganizationPlansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutOrganizationPlansInput, PlanUncheckedUpdateWithoutOrganizationPlansInput>
  }

  export type PlanUpdateWithoutOrganizationPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutPlansNestedInput
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutOrganizationPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PaymentUpsertWithoutOrganizationPlanInput = {
    update: XOR<PaymentUpdateWithoutOrganizationPlanInput, PaymentUncheckedUpdateWithoutOrganizationPlanInput>
    create: XOR<PaymentCreateWithoutOrganizationPlanInput, PaymentUncheckedCreateWithoutOrganizationPlanInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrganizationPlanInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrganizationPlanInput, PaymentUncheckedUpdateWithoutOrganizationPlanInput>
  }

  export type PaymentUpdateWithoutOrganizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPaymentsNestedInput
    plan?: PlanUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrganizationPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    assigned?: TicketCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    organizationId?: string | null
    assigned?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutAssignedInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAssignedInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    organizationId?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutAssignedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedInput, UserUncheckedCreateWithoutAssignedInput>
  }

  export type CommentCreateWithoutTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
    author?: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId?: string | null
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type CommentCreateOrConnectWithoutTicketInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentCreateManyTicketInputEnvelope = {
    data: CommentCreateManyTicketInput | CommentCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketAccessTokenCreateWithoutTicketInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TicketAccessTokenUncheckedCreateWithoutTicketInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type TicketAccessTokenCreateOrConnectWithoutTicketInput = {
    where: TicketAccessTokenWhereUniqueInput
    create: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput>
  }

  export type TicketAccessTokenCreateManyTicketInputEnvelope = {
    data: TicketAccessTokenCreateManyTicketInput | TicketAccessTokenCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTicketsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    assigned?: TicketUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    assigned?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutAssignedInput = {
    update: XOR<UserUpdateWithoutAssignedInput, UserUncheckedUpdateWithoutAssignedInput>
    create: XOR<UserCreateWithoutAssignedInput, UserUncheckedCreateWithoutAssignedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedInput, UserUncheckedUpdateWithoutAssignedInput>
  }

  export type UserUpdateWithoutAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
    create: XOR<CommentCreateWithoutTicketInput, CommentUncheckedCreateWithoutTicketInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTicketInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTicketInput, CommentUncheckedUpdateWithoutTicketInput>
  }

  export type CommentUpdateManyWithWhereWithoutTicketInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketAccessTokenUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketAccessTokenWhereUniqueInput
    update: XOR<TicketAccessTokenUpdateWithoutTicketInput, TicketAccessTokenUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketAccessTokenCreateWithoutTicketInput, TicketAccessTokenUncheckedCreateWithoutTicketInput>
  }

  export type TicketAccessTokenUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketAccessTokenWhereUniqueInput
    data: XOR<TicketAccessTokenUpdateWithoutTicketInput, TicketAccessTokenUncheckedUpdateWithoutTicketInput>
  }

  export type TicketAccessTokenUpdateManyWithWhereWithoutTicketInput = {
    where: TicketAccessTokenScalarWhereInput
    data: XOR<TicketAccessTokenUpdateManyMutationInput, TicketAccessTokenUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketAccessTokenScalarWhereInput = {
    AND?: TicketAccessTokenScalarWhereInput | TicketAccessTokenScalarWhereInput[]
    OR?: TicketAccessTokenScalarWhereInput[]
    NOT?: TicketAccessTokenScalarWhereInput | TicketAccessTokenScalarWhereInput[]
    id?: StringFilter<"TicketAccessToken"> | string
    ticketId?: StringFilter<"TicketAccessToken"> | string
    token?: StringFilter<"TicketAccessToken"> | string
    createdAt?: DateTimeFilter<"TicketAccessToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"TicketAccessToken"> | Date | string | null
  }

  export type OrganizationUpsertWithoutTicketsInput = {
    update: XOR<OrganizationUpdateWithoutTicketsInput, OrganizationUncheckedUpdateWithoutTicketsInput>
    create: XOR<OrganizationCreateWithoutTicketsInput, OrganizationUncheckedCreateWithoutTicketsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTicketsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTicketsInput, OrganizationUncheckedUpdateWithoutTicketsInput>
  }

  export type OrganizationUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type TicketCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    externalName?: string | null
    externalEmail?: string | null
    createdBy?: UserCreateNestedOneWithoutTicketsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedInput
    ticketAccessTokens?: TicketAccessTokenCreateNestedManyWithoutTicketInput
    organization?: OrganizationCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
    ticketAccessTokens?: TicketAccessTokenUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCommentsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    tickets?: TicketCreateNestedManyWithoutCreatedByInput
    assigned?: TicketCreateNestedManyWithoutAssignedToInput
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
    organizationId?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutCreatedByInput
    assigned?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TicketUpsertWithoutCommentsInput = {
    update: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
    create: XOR<TicketCreateWithoutCommentsInput, TicketUncheckedCreateWithoutCommentsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutCommentsInput, TicketUncheckedUpdateWithoutCommentsInput>
  }

  export type TicketUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedNestedInput
    ticketAccessTokens?: TicketAccessTokenUpdateManyWithoutTicketNestedInput
    organization?: OrganizationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketAccessTokens?: TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUpdateManyWithoutAssignedToNestedInput
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type OrganizationCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    mailServiceConfigs?: MailServiceConfigUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPaymentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPaymentsInput, OrganizationUncheckedCreateWithoutPaymentsInput>
  }

  export type PlanCreateWithoutPaymentsInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationPlans?: OrganizationPlanCreateNestedManyWithoutPlanInput
    Organization?: OrganizationCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutPaymentsInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    organizationPlans?: OrganizationPlanUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPaymentsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPaymentsInput, PlanUncheckedCreateWithoutPaymentsInput>
  }

  export type OrganizationPlanCreateWithoutPaymentInput = {
    id?: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    organization: OrganizationCreateNestedOneWithoutOrganizationPlanInput
    plan: PlanCreateNestedOneWithoutOrganizationPlansInput
  }

  export type OrganizationPlanUncheckedCreateWithoutPaymentInput = {
    id?: string
    organizationId: string
    planId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
  }

  export type OrganizationPlanCreateOrConnectWithoutPaymentInput = {
    where: OrganizationPlanWhereUniqueInput
    create: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
  }

  export type OrganizationUpsertWithoutPaymentsInput = {
    update: XOR<OrganizationUpdateWithoutPaymentsInput, OrganizationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrganizationCreateWithoutPaymentsInput, OrganizationUncheckedCreateWithoutPaymentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPaymentsInput, OrganizationUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrganizationUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    mailServiceConfigs?: MailServiceConfigUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PlanUpsertWithoutPaymentsInput = {
    update: XOR<PlanUpdateWithoutPaymentsInput, PlanUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PlanCreateWithoutPaymentsInput, PlanUncheckedCreateWithoutPaymentsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPaymentsInput, PlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type PlanUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlans?: OrganizationPlanUpdateManyWithoutPlanNestedInput
    Organization?: OrganizationUpdateOneWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationPlans?: OrganizationPlanUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type OrganizationPlanUpsertWithoutPaymentInput = {
    update: XOR<OrganizationPlanUpdateWithoutPaymentInput, OrganizationPlanUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrganizationPlanCreateWithoutPaymentInput, OrganizationPlanUncheckedCreateWithoutPaymentInput>
    where?: OrganizationPlanWhereInput
  }

  export type OrganizationPlanUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrganizationPlanWhereInput
    data: XOR<OrganizationPlanUpdateWithoutPaymentInput, OrganizationPlanUncheckedUpdateWithoutPaymentInput>
  }

  export type OrganizationPlanUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutOrganizationPlanNestedInput
    plan?: PlanUpdateOneRequiredWithoutOrganizationPlansNestedInput
  }

  export type OrganizationPlanUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationCreateWithoutMailServiceConfigsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    tickets?: TicketCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanCreateNestedManyWithoutOrganizationInput
    payments?: PaymentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMailServiceConfigsInput = {
    id?: string
    name: string
    email: string
    slug: string
    phoneNumber: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    tickets?: TicketUncheckedCreateNestedManyWithoutOrganizationInput
    widgetConfig?: WidgetConfigUncheckedCreateNestedManyWithoutOrgInput
    OrganizationPlan?: OrganizationPlanUncheckedCreateNestedManyWithoutOrganizationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMailServiceConfigsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMailServiceConfigsInput, OrganizationUncheckedCreateWithoutMailServiceConfigsInput>
  }

  export type OrganizationUpsertWithoutMailServiceConfigsInput = {
    update: XOR<OrganizationUpdateWithoutMailServiceConfigsInput, OrganizationUncheckedUpdateWithoutMailServiceConfigsInput>
    create: XOR<OrganizationCreateWithoutMailServiceConfigsInput, OrganizationUncheckedCreateWithoutMailServiceConfigsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMailServiceConfigsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMailServiceConfigsInput, OrganizationUncheckedUpdateWithoutMailServiceConfigsInput>
  }

  export type OrganizationUpdateWithoutMailServiceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMailServiceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutOrganizationNestedInput
    widgetConfig?: WidgetConfigUncheckedUpdateManyWithoutOrgNestedInput
    OrganizationPlan?: OrganizationPlanUncheckedUpdateManyWithoutOrganizationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.Role
    enable?: boolean | null
    password: string
  }

  export type PlanCreateManyOrganizationInput = {
    id?: string
    title: string
    monthlyPrice: number
    annualPrice: number
    durationMonths?: number
    description: string
    features?: PlanCreatefeaturesInput | string[]
    buttonText: string
    highlight?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type WidgetConfigCreateManyOrgInput = {
    id?: string
    buttonText?: string | null
    modalTitle?: string | null
    buttonColor?: string | null
    headerColor?: string | null
    logoUrl?: string | null
    showPriority?: boolean
    theme?: string | null
    successMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationPlanCreateManyOrganizationInput = {
    id?: string
    planId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type PaymentCreateManyOrganizationInput = {
    id?: string
    paymentReference: string
    planId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MailServiceConfigCreateManyOrganizationInput = {
    id?: string
    name: string
    serviceType?: string
    host: string
    port: number
    user: string
    password: string
    tls?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutCreatedByNestedInput
    assigned?: TicketUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    enable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlans?: OrganizationPlanUpdateManyWithoutPlanNestedInput
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlans?: OrganizationPlanUncheckedUpdateManyWithoutPlanNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    annualPrice?: FloatFieldUpdateOperationsInput | number
    durationMonths?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    features?: PlanUpdatefeaturesInput | string[]
    buttonText?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WidgetConfigUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetConfigUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetConfigUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    buttonText?: NullableStringFieldUpdateOperationsInput | string | null
    modalTitle?: NullableStringFieldUpdateOperationsInput | string | null
    buttonColor?: NullableStringFieldUpdateOperationsInput | string | null
    headerColor?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    showPriority?: BoolFieldUpdateOperationsInput | boolean
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationPlanUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanUpdateOneRequiredWithoutOrganizationPlansNestedInput
    payment?: PaymentUpdateOneWithoutOrganizationPlanNestedInput
  }

  export type OrganizationPlanUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationPlanUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPaymentsNestedInput
    organizationPlan?: OrganizationPlanUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlan?: OrganizationPlanUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailServiceConfigUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailServiceConfigUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MailServiceConfigUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tls?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    assignedToId?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
  }

  export type TicketCreateManyAssignedToInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.TicketStatus
    priority: $Enums.TicketPriority
    slaDeadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    source?: $Enums.TicketSource | null
    createdById?: string | null
    externalName?: string | null
    externalEmail?: string | null
    organizationId?: string | null
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    ticketId: string
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type TicketUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: UserUpdateOneWithoutAssignedNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUpdateManyWithoutTicketNestedInput
    organization?: OrganizationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneWithoutTicketsNestedInput
    comments?: CommentUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUpdateManyWithoutTicketNestedInput
    organization?: OrganizationUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTicketNestedInput
    ticketAccessTokens?: TicketAccessTokenUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    slaDeadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: NullableEnumTicketSourceFieldUpdateOperationsInput | $Enums.TicketSource | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: TicketUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketId?: StringFieldUpdateOperationsInput | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationPlanCreateManyPlanInput = {
    id?: string
    organizationId: string
    startDate?: Date | string
    expiresAt: Date | string
    isActive?: boolean
    paymentId?: string | null
  }

  export type PaymentCreateManyPlanInput = {
    id?: string
    paymentReference: string
    organizationId: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationPlanUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutOrganizationPlanNestedInput
    payment?: PaymentUpdateOneWithoutOrganizationPlanNestedInput
  }

  export type OrganizationPlanUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationPlanUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPaymentsNestedInput
    organizationPlan?: OrganizationPlanUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationPlan?: OrganizationPlanUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentReference?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyTicketInput = {
    id?: string
    content: string
    createdAt?: Date | string
    authorId?: string | null
    isImage?: boolean | null
    externalName?: string | null
    externalEmail?: string | null
  }

  export type TicketAccessTokenCreateManyTicketInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type CommentUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    isImage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    externalName?: NullableStringFieldUpdateOperationsInput | string | null
    externalEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketAccessTokenUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketAccessTokenUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketAccessTokenUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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