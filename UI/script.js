var test = (function(){
    var photoPosts = [
        {
            id: '1',
            description: 'cats :)',
            creationDate: new Date('2019-01-07T23:59:59'),
            author: 'Alex',
            photoLink: 'http://cats.png',
            likes : ["Vadim"],
            hashTags : ["#funny", "cats"]
        },

        {
            id: '3',
            description: 'SpaceX',
            creationDate: new Date('2005-02-20T23:00:00'),
            author: 'Alex',
            photoLink: '',
            likes : ["Alex","Sidorov"],
            hashTags : ["#space", "#ElonMusk"]
        },

        {
            id: '2',
            description: 'I love Python!!!!!!!',
            creationDate: new Date('2018-02-20T23:00:00'),
            author: 'Dima',
            photoLink: 'https://qph.fs.quoracdn.net/main-qimg-5bcd0509a8c32a59e5d362c1ed531f19',
            likes : ["Vadim", "Alex"],
            hashTags : []
        },

        {
            id: '4',
            description: 'ASD!!!! 9/32',
            creationDate: new Date('2019-03-10T12:37:12'),
            author: 'Nekit',
            photoLink: 'https://acm.bsu.by/courses/89/problems/890/1.png',
            likes : ["Alex","Vadim", "Fronter"],
            hashTags : ["#ASD","#algorithms","structure", "data"]
        },

        {
            id: '5',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '6',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '7',
            description: 'dOgS ))))))))',
            creationDate: new Date('2019-01-20T13:02:29'),
            author: 'Sanya',
            photoLink: 'https://prosobachku.ru/wp-content/uploads/2017/04/harakter-djek-rasel-terier.jpg',
            likes : [],
            hashTags : ["animals", "#dog"]
        },

        {
            id: '8',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '9',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '10',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '11',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '12',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '13',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '14',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '15',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '16',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '17',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '77',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '18',
            description: 'nature',
            creationDate: new Date('2017-05-20T00:00:00'),
            author: 'Natalia',
            photoLink: 'https://s1.1zoom.ru/b5050/41/189587-frederika_1680x1050.jpg',
            likes : ["Alex", "Aleksandra"],
            hashTags : ["#nature"]
        },

        {
            id: '404',
            description: 'Rick Sanchez',
            creationDate: new Date('2013-12-25T15:04:24'),
            author: 'Pavel',
            photoLink: 'https://www.clipartmax.com/png/middle/194-1947759_rick-sanchez-morty-smith-drawing-deviantart-rick-and-morty-vector.png',
            likes : [],
            hashTags : []
        },
    ];

    return{
        getPhotoPost: function (id) {
                if( photoPosts.find(x=>x.id ==Number.parseInt(id)))return photoPosts.find(x=>x.id ==Number.parseInt(id));
                return false;
        },

        getPhotoPosts: function(skip, top, filterConfig){
            skip = skip || 0;
            top = top || 10;
            filterConfig = filterConfig || null;
            var foundPosts = photoPosts.sort(function (post1, post2) {
                return post1.creationDate - post2.creationDate;
            });
            if(filterConfig){
                if(filterConfig.hasOwnProperty("author")) {
                    foundPosts = foundPosts.filter(x=>x.author == filterConfig.author);
                }
                else if(filterConfig.hasOwnProperty("hashTags")){
                    if(filterConfig.hashTags.length !== 0){
                        for(var i=0;i<filterConfig.hashTags.length;i++)
                        foundPosts = foundPosts.filter( x=>x.hashTags.includes(filterConfig.hashTags[i]));
                    }
                }
            }
            foundPosts = foundPosts.slice(skip, skip + top);
            if(this.checkObject(foundPosts) && foundPosts.length !== 0){
                return foundPosts;
            }
            else {
                return null;
            }
        },

        validatePhotoPost: function(post){
            if(this.checkObject(post) && this.checkObject(post.id) &&
                this.checkObject(post.description) && this.checkObject(post.creationDate) &&
                this.checkObject(post.author) && this.checkObject(post.photoLink) &&
                this.checkObject(post.likes) && this.checkObject(post.hashTags))
            {
                if(this.checkString(post.id) && this.checkString(post.description) &&
                    this.checkDate(post.creationDate) && post.description.length < 200)
                {
                    if(this.checkId(post.id) && !this.isEmpty(post.author) &&
                        !this.isEmpty(post.photoLink))
                    {
                        if(this.checkString(post.author) && this.checkString(post.photoLink)){
                            var checkLikes = false;
                            var checkHashTags = false;
                            if(post.likes.length !== 0) {
                                checkLikes = post.likes.every(function (author) {
                                    return this.checkString(author);
                                }, this);
                            }
                            else {
                                checkLikes = true;
                            }

                            if(post.hashTags.length !== 0){
                                checkHashTags = post.hashTags.every(function (hashtag) {
                                    if(hashtag.charAt(0) !== '#'){
                                        return false;
                                    }
                                    return this.checkString(hashtag);
                                }, this);
                            }
                            else {
                                checkHashTags = true;
                            }

                            return !(!checkLikes || !checkHashTags);
                        }
                    }
                }
            }
            return false;
        },

        addPhotoPost: function(post){
            if(!this.getPhotoPost(post.id) && this.validatePhotoPost(post)){
                photoPosts.push(post);
                return true;
            }
            else {
                return false;
            }
        },

        editPhotoPost: function(id, post){
            if(!this.getPhotoPost(id)) {
                return false;
            }
            if(!this.checkId(id)){
                console.log("Incorrect id!");
                return false;
            }
            if(this.checkObject(post.photoLink)){
                if(this.checkString(post.photoLink) && !this.isEmpty(post.photoLink) )
                    this.getPhotoPost(id).photoLink = post.photoLink;
                else {
                    console.log("Incorrect link!");
                    return false;
                }
            }

            if(this.checkObject(post.description)){
                if(this.checkString(post.description) && !this.isEmpty(post.description) && post.description.length < 200)
                    this.getPhotoPost(id).description = post.description;
                else {
                    console.log("Incorrect description!");
                    return false;
                }
            }
            var checkHashTags = false;
            if(this.checkObject(post.hashTags)){
                checkHashTags = post.hashTags.every(function (hashtag) {
                    if(hashtag.charAt(0) !== '#'){
                        return false;
                    }
                    return this.checkString(hashtag);
                }, this);
            }
            if(checkHashTags)
            {
                this.getPhotoPost(id).hashTags = post.hashTags;
                return true;
            }
            else
                return false;
        },

        removePhotoPost: function(id){
            if(this.getPhotoPost(id)){
                photoPosts.splice(photoPosts.indexOf(this.getPhotoPost(id)),1);
                return true;
            }
            else {
                return false;
            }
        },

        checkString: function(someString){
            return typeof someString === "string";
        },

        checkDate: function(date){
            if(date instanceof Date){
                return true;
            }
            var regDate = /^\d{4}-\d{1,2}-\d{1,2}(T[0-2][0-9]:[0-5][0-9]:[0-5][0-9])*$/;
            if(!regDate.test(date.toString())){
                return false;
            }
            var partsDate = date.split("-");
            var realDate = new Date(date);
            return partsDate[0] === realDate.getFullYear().toString() &&
                partsDate[1] - 1 === realDate.getMonth().toString() &&
                partsDate[2] === realDate.getDate().toString();
        },

        checkId: function(id)
        {
            return /^\d+$/.test(id);
        },

        checkObject: function(post)
        {
            return !!post;
        },

        isEmpty: function (someString) {
            return !someString.trim();
        }
    }
}());