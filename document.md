## 1 : 1

### Author

```js
const author = {
  name: "TranDung",
  age: 21,
};
```

### Address

```js
const address = {
  street: "NhuHoa - KimSon",
  city: "NinhBinh",
};
```

### Subdocuments: Author.findOne({name: "TranDung"}) => 1 query

```js
const embed = {
  name: "TranDung",
  age: 21,
  address: {
    street: "NhuHoa - KimSon",
    city: "NinhBinh",
  },
};
```

### References: Author.findOne({name: "TranDung"}) => authorId, Address.findOne({authorId}) => 2 query

```js
const author = {
  name: "TranDung",
  age: 22,
  authorId: "",
};
const address = {
  authorId: "",
  street: "NhuHoa - KimSon",
  city: "NinhBinh",
};
```

## 1 : N

```js
const blog = {
  title: "Title",
  url: "url",
  description: "Description",
};
```

```js
const comment1 = {
  username: "TranDung",
  comment: "Comment one",
};
```

```js
const comment2 = {
  username: "DungHenry",
  comment: "Comment two",
};
```

### Subdocuments

```js
const embed = {
  title: "Title",
  url: "url",
  description: "Description",
  comments: [
    {
      username: "TranDung",
      comment: "Comment one",
    },
    {
      username: "DungHenry",
      comment: "Comment two",
    },
  ],
};
```

### References

#### collection Blogs

```js
  blogId: 1,
  title: "Title",
  url: "url",
  description: "Description",

```

#### collection Comments

```js
  blogId: 1,
  username: "TranDung",
  comment: "Comment one",
```

```js
  blogId: 1,
  username: "DungHenry",
  comment: "Comment two",
```

#### query comments: Comment.find().skip().limit(1000)

