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
```
db.albums.find({$and: [{ $or: [{"duration_ms": {$lt: 180000}},{"duration_ms": {$gt:240000}}]},{ $or: [{ "available_markets": "DE","available_markets": "GB","available_markets": "FR"}]}]},{"artists.name":1,"_id": 0})
```
6.
```
db.albums.find({"album.total_tracks": {$gt: 20}},{"album.name": 1, "_id":0})
```
7.
```
db.albums.find({"preview_url": {$in: [null]}},{"name": 1, "album.name": 1, "_id": 0})
```