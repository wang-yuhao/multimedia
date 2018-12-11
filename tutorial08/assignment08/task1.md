1.

```
db.albums.findOne(); 
```
```
db.albums.find().limit(1);
```
2.
```
db.albums.find({popularity: {$gt: 60}})
```
3.
```
db.albums.find({available_markets:{$not: {$all: ["DE"]}}})
```
4.
```
db.albums.find({$nor: [{"artists.name":"Mariah Carey"},{"artists.name":"Elvis Presley"}]})
```
5.
