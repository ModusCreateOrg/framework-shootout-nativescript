const frameModule = require('ui/frame');
const NCAPModel = require('~/models/ncap');
const loadToContext = require('~/utils/loadToContext');

const ctx = NCAPModel.getEmptyPlaceholder();

exports.onNavigatingTo = args => {
    const page = args.object;
    page.bindingContext = ctx;

    const {year} = page.navigationContext;
    loadToContext(ctx, '/modelyear/' + year)
};

exports.gotoModels = args => {
    frameModule.topmost().navigate({
        moduleName: 'views/model/model',
        context: {
            year: ctx.items[args.index].ModelYear,
            make: ctx.items[args.index].Make,
        }
    });
};
