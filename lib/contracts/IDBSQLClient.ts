import IDBSQLSession from './IDBSQLSession';

export interface ConnectionOptions {
  host: string;
  port?: number;
  path: string;
  token: string;
  clientId?: string;
}

export interface OpenSessionRequest {
  initialCatalog?: string;
  initialSchema?: string;
}

export default interface IDBSQLClient {
  connect(options: ConnectionOptions): Promise<IDBSQLClient>;

  openSession(request?: OpenSessionRequest): Promise<IDBSQLSession>;

  close(): Promise<void>;
}
