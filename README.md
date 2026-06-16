
# Build Your Own Redis (Node.js)

A Redis-inspired in-memory database built from scratch using Node.js, raw TCP sockets, and the Redis Serialization Protocol (RESP).

This project is part of my journey to understand how databases like Redis work internally instead of just using them through libraries.

---

## Goals

- Learn TCP networking
- Understand Redis internals
- Implement the RESP protocol
- Build an in-memory key-value store
- Explore command parsing and dispatching
- Add persistence and expiration mechanisms
- Understand how real database servers communicate with clients

---

## Tech Stack

- Node.js
- TCP Sockets (`net` module)
- JavaScript (ES Modules)

---

## Current Features

- TCP Server
- Redis CLI Connectivity
- RESP Request Parsing
- Command Dispatcher using Switch Cases
- In-Memory Storage using `Map`

---

## Planned Commands

### Core

- [x] PING
- [ ] SET
- [ ] GET
- [ ] DEL
- [ ] EXISTS

### Counters

- [ ] INCR
- [ ] DECR

### Expiration

- [ ] EXPIRE
- [ ] TTL

### Lists

- [ ] LPUSH
- [ ] RPUSH
- [ ] LPOP
- [ ] RPOP

### Hashes

- [ ] HSET
- [ ] HGET
- [ ] HDEL

### Persistence

- [ ] SAVE
- [ ] LOAD

### Pub/Sub

- [ ] SUBSCRIBE
- [ ] PUBLISH

---

## Project Structure

```txt
src/
│
├── server.js
│
├── parser/
│   └── respParser.js
│
├── commands/
│   ├── ping.js
│   ├── set.js
│   ├── get.js
│   └── ...
│
├── storage/
│   └── store.js
│
└── utils/
    └── responses.js
```

---

## How RESP Works

When a Redis client sends:

```bash
SET name gaming
```

The server actually receives:

```txt
*3
$3
SET
$4
name
$6
gaming
```

This format is called RESP (Redis Serialization Protocol).

The parser converts this request into:

```js
{
  command: "SET",
  args: ["name", "gaming"]
}
```

which can then be dispatched to the appropriate command handler.

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm start
```

or

```bash
node src/server.js
```

---

## Connecting with Redis CLI

Start the server:

```bash
node src/server.js
```

Connect using Redis CLI:

```bash
redis-cli -p 8080
```

Example:

```bash
PING
```

Expected Response:

```txt
PONG
```

---

## Why Build Redis?

Most developers use Redis through libraries:

```js
redis.set("name", "gaming");
```

This project focuses on understanding what happens underneath:

- How clients communicate with servers
- How commands are serialized
- How databases store data in memory
- How protocols are designed
- How networking works at a lower level

---

## Learning Outcomes

By completing this project, I aim to gain hands-on experience with:

- TCP Networking
- Protocol Design
- Database Internals
- In-Memory Data Structures
- Node.js System Programming
- Event-Driven Architecture

---

## License

MIT
