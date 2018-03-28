{% extends 'layout.html' %}

{% block body %}

<div class="container" style="padding: 100px;">
    <div class="row">
        <div class="col-sm-6 offset-sm-3">
            <div class="card">
                <div class="card-header">登入</div>
                <div class="card-body">
                    <form action="/login" method="post">
                    <div class="form-group row">
                        <div class="col">
                        <input type="text" class="form-control" id="username" name="username" placeholder="Username">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <button type="submit" class="btn btn-primary btn-block">登入</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

{% endblock %}